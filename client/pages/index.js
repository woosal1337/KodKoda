import { useUser } from "../utils/auth/useUser";
import { Layout , Main} from "../components";
import useSWR from "swr";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index = () => {
  const { user, logout } = useUser();
  const { data, error, mutate } = useSWR("/api/main", fetcher);
  return (
    <Layout user={user ? user : null} auth={user ? true : false} logOut={logout} authPage={false}>
      <Main auth={user ? true : false} userId={user ? user.id : null} data={data} mutateFunc={mutate} />
    </Layout>
  );
};

export default Index;
