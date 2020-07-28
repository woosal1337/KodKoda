import { useRouter } from 'next/router'
import Link from 'next/link'
import PostLayout from '../../../layouts/Post/PostLayout'
import Editor from '../../../components/Editor'

const AskQuestion = () => {
  const router = useRouter()

  return (
    <>
      <PostLayout >
        <Editor />
      </PostLayout>
    </>
  )
}

export default AskQuestion;