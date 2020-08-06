import { useUser } from "../utils/auth/useUser";
import { Layout , Main} from "../components";


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
