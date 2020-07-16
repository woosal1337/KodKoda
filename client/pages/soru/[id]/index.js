import { useRouter } from 'next/router'
import Link from 'next/link'
import Bar from '../../../components/Bar'
import PostLayout from '../../../layouts/Post/PostLayout'
import PostBody from '../../../components/PostBody'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Bar />
      <PostLayout >
        <PostBody id={id} />
      </PostLayout>
    </>
  )
}

export default Post;