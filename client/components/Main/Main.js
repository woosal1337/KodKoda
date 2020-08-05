import React, { useState, useEffect  } from "react";
import useSWR from "swr";
import { Typography, Grid, Divider, makeStyles , Container} from "@material-ui/core";
import Question from "../Question";
import CircularProgress from '@material-ui/core/CircularProgress';
import { mutate } from 'swr'

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


const Main = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { data, error } = useSWR("/api/main",fetcher);
  const { auth, userId } = props

  async function handleUpVote(event) {
    if (userId) {
      event.preventDefault()
      // mutate current data to optimistically update the UI
      // the fetch below could fail, in that case the UI will
      // be in an incorrect state
      //mutate('/api/soru/upvote', [...data, text], false)
      // then we send the request to the API and let mutate
      // update the data with the API response
      mutate('/api/soru/upvote', await fetch('/api/soru/upvote', {
        method: 'POST',
        body: JSON.stringify({ userId: userId, postId: postId })
      }))
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
                    <Question q={q} auth={auth} handleUpVote={handleUpVote} />
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
