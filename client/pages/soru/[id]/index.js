import { useRouter } from 'next/router'
import Link from 'next/link'
import PostLayout from '../../../layouts/Post/PostLayout'
import PostBody from '../../../components/Post/PostBody'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <PostLayout >
        <PostBody id={id} />
      </PostLayout>
    </>
  )
}

export default Post;