import React, { useState, useEffect  } from "react";
import useSWR, {mutate} from "swr";
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

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const updateVote = (userid, postid) => { 
  console.log(userid, postid)
  fetch('/api/soru/upvote', {
    method: 'POST',
    body: JSON.stringify({ userId: userid, postId: postid })
  }).then((res) => res.json());
}


const Main = (props) => {
  const classes = useStyles();
  const [ loading, setLoading ] = useState(false);
  const { data, error } = useSWR("/api/main", fetcher);
  const { auth, userId } = props

  async function handleUpVote(event, idx, postId) {
    if (userId) {
      event.preventDefault()
      // send a request to the API to update the data
      await updateVote(userId, postId)
      // update the local data immediately and revalidate (refetch)
      // NOTE: key is not required when using useSWR's mutate as it's pre-bound
      data[idx].data= {...data[idx].data, voteCount: data[idx].data.voteCount + 1}
      mutate('/api/main', data)
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
