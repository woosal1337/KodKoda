import { useRouter } from 'next/router'
import Link from 'next/link'
import PostLayout from '../../../layouts/Post/PostLayout'
import PostBody from '../../../components/Post/PostBody'
import useSWR from 'swr'

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

function Post  () {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  const {data} = useSWR(`/api/soru/${id}`,fetcher)
  if (!data){
    return 'Loading...'
  }
  console.log(data);
;  return (
    <>
      <PostLayout >
        <PostBody id={id} data={data}/>
      </PostLayout>
    </>
  )
}

export default Post;