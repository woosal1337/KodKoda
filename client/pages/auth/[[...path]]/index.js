import FirebaseAuth from "../../../components/FirebaseAuth";
import { useRouter } from 'next/router'
import { makeStyles, Grid } from "@material-ui/core";
import { Layout } from "../../../components";

const useStyles = makeStyles((theme) => ({
  authContainer: {
    marginTop: 20,
  },
}));

const Auth = () => {
  const classes = useStyles()
  return (
    <Layout authPage={true}>
      <Grid container spacing={4} className={classes.authContainer}>
        <Grid item xs={12} md={12}>
          <FirebaseAuth />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Auth;