import useSWR from "swr";
import { useUser } from "../utils/auth/useUser";
import { Layout , Main} from "../components";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index = () => {
  const { user, logout } = useUser();
  if (!user) {
    return (
      <Layout user={user} auth={false} authPage={false} >
        <Main auth={false} />
      </Layout>
    );
  }

  return (
    <Layout user={user} auth={true} logOut={logout} authPage={false}>
      <Main auth={true} userId={user.id} />
    </Layout>
  );
};

export default Index;
