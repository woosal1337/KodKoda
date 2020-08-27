import { useRouter } from "next/router";
import { useUser } from "../../../utils/auth/useUser";
import Link from "next/link";
import PostLayout from "../../../layouts/Post/PostLayout";
import PostBody from "../../../components/Post/PostBody";
import useSWR from "swr";
import CircularProgress from "@material-ui/core/CircularProgress";
import { post } from "../../../utils/db/schemas";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  return res.json();
};

const postResponse = (rData) =>
  fetch("/api/soru/postResponse", {
    method: "POST",
    body: JSON.stringify(rData),
  }).then((res) => res.json());

const deletePost = (userid, postid) =>
  fetch('/api/soru/delete', {
    method: 'POST',
    body: JSON.stringify({ userId: userid, postId: postid })
  }).then((res) => res.json())

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user, logout } = useUser();
<<<<<<< HEAD
  const { data, error, mutate } = useSWR(`/api/soru/${id}`, fetcher);

  const onMutate = (rData) => {
    mutate(async (data) => {
      const result = await postResponse(rData);
      return {
        ...data,
        a: result.a
      };
    }, false);
  };
=======
  const { data, error, mutate } = useSWR(`/api/soru/${id}`, fetcher)
  console.log(data)
  const onMutate = (rData) => {
    mutate(async data => {
      const result = await postResponse(rData)
      return { ...data, a: [{ ...post, body: rData.body, ownerName: rData.userName }, ...data.a] }
    }, false)
  }
>>>>>>> 47f98c2ead8a5de20589e31b3c939cb368bdff0a

  const handleDelete = (rData) =>{
  }
  return (
    <>
<<<<<<< HEAD
      <PostLayout auth={user ? true : false} logOut={logout} authPage={false}>
        {!data ? (
          <CircularProgress />
        ) : (
          <PostBody
            id={id}
            userId={user ? user.id : null}
            userName={user ? user.username : null}
            data={data}
            mutate={mutate}
            onMutate={onMutate}
            handleDelete={handleDelete}
          />
        )}
=======
      <PostLayout auth={user ? true : false} logOut={logout} authPage={false} >
        {!data ?
          <CircularProgress />
          :
          <PostBody id={id} userId={user ? user.id : null} userName={user ? user.username : null} data={data} onMutate={onMutate} handleDelete={handleDelete} />
        }
>>>>>>> 47f98c2ead8a5de20589e31b3c939cb368bdff0a
      </PostLayout>
    </>
  );
};

export default Post;
