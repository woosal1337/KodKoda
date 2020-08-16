import { useRouter } from 'next/router'
import { useUser } from "../../../utils/auth/useUser";
import Link from 'next/link'
import PostLayout from '../../../layouts/Post/PostLayout'
import PostBody from '../../../components/Post/PostBody'
import useSWR from 'swr'
import CircularProgress from '@material-ui/core/CircularProgress';

const fetcher = async (...args) => {
  const res = await fetch(...args);
  return res.json();
};

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const { user, logout } = useUser();
  const { data } = useSWR(`/api/soru/${id}`, fetcher)

  return (
    <>
      <PostLayout auth={user ? true : false} logOut={logout} authPage={false} >
        { !data ? 
          <CircularProgress />
          :
          <PostBody id={id} userId={user ? user.id : null} data={data}/>
        }
      </PostLayout>
    </>
  )
}

export default Post;