import { useUser } from "../utils/auth/useUser";
import { Layout , Main} from "../components";
import useSWR, {mutate} from "swr";


const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index = () => {
  const { user, logout } = useUser();
  const { data, error, mutate } = useSWR("/api/main", fetcher);

  if (!user) {
    return (
      <Layout user={user} auth={false} authPage={false} >
        <Main auth={false} data={data} mutateFunc={mutate} />
      </Layout>
    );
  }

  return (
    <Layout user={user} auth={true} logOut={logout} authPage={false}>
      <Main auth={true} userId={user.id} data={data} mutateFunc={mutate} />
    </Layout>
  );
};

export default Index;
