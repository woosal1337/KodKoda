import React, { useState, useEffect  } from "react";
import { useRouter } from 'next/router'
import { Typography, Grid, Divider, makeStyles , Container} from "@material-ui/core";
import Question from "../Question";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "Hind",
    fontWeight: 700,
    fontSize: 36,
  },
  rightTitle: {
    lineHeight: "29px",
  },
  divider: {
    marginBottom: 20,
  },
  mainContainer: {
    maxWidth: 900,
  },
  mainGridContainer: {
    marginTop: 20,
  },
  questionsContainer: {},
}));

const updateVote = (userid, postid) => 
  fetch('/api/soru/upvote', {
    method: 'POST',
    body: JSON.stringify({ userId: userid, postId: postid })
  }).then((res) => res.json());


const Main = (props) => {
  const classes = useStyles();
  const router = useRouter()
  const [ loading, setLoading ] = useState(false);
  const { data, mutateFunc } = props
  const { auth, userId } = props

  async function handleUpVote(event, idx, postId) {
    if (userId) {
      event.preventDefault()
      const newData = {id: data[idx].id, data:{...data[idx].data, voteCount: data[idx].data.voteCount + 1}}
      // update the local data immediately
      // NOTE: key is not required when using useSWR's mutate as it's pre-bound
      mutateFunc(async data => { 
        const { docExists, error } = await updateVote(userId, postId)
        if (!docExists) {
          return data.map((d, i) => {return (i == idx) ? newData : d})
        }
      }, false)
    } else {
      router.push('/auth')
    }
  }
  
  return (
    <Container maxWidth="md" className={classes.mainContainer}>
      <Grid container spacing={4} className={classes.mainGridContainer}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.title}
            gutterBottom
          >
            Güncel Sorular
          </Typography>
          <Divider className={classes.divider} />
          <Grid
            container
            direction="column"
            wrap="nowrap"
            spacing={1}
            className={classes.questionsContainer}
          >
            { !data ?
              <CircularProgress />
              :
              data.map((q, i) => {
                return (
                  <Grid key={i} item>
                    <Question q={q} auth={auth} index={i} handleUpVote={handleUpVote} />
                  </Grid>
                );
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
