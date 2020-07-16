import FirebaseAuth from '../components/FirebaseAuth'
import Bar from '../components/Bar'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  authContainer:{
    marginTop:20
  },
}))


const Auth = () => {
  const classes = useStyles();
  return (
    <>
      <Bar authPage={true}/>
      <Grid container spacing={4}  className={classes.authContainer}>
        <Grid item xs={12} md={12} >
          <FirebaseAuth />
        </Grid>
      </Grid>
    </>
  )
}

export default Auth
