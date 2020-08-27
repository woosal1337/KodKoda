import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";
import PostAnswer from "./PostAnswer";
import containsUrl from "../../utils/utilFunctions";

//import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles((theme) => ({
  answersContainer: {
    marginTop: 20,
    //minHeight: 200,
  },
}));

<<<<<<< HEAD
const PostAnswers = (props) => {
  const classes = useStyles();
  const { data } = props;
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      className={classes.answersContainer}
    >
      <Grid item xs={3} md={1}></Grid>
      <Grid item container xs={12} md={9}>
        <Grid
          container
          direction="column"
          wrap="nowrap"
          spacing={3}
          className={classes.answersContainer}
        >
          {data.map((e, i) => {
            return (
              <Grid key={i} item>
                <PostAnswer
                  data={e}
                  postId={e.id}
                  reaction={{id: e.id, likeCount: e.likeCount, confusedCount: e.confusedCount, clapCount: e.clapCount }}
                  reactionUpvoteHandler={props.reactionUpvoteHandler}
                  index={i}
                />
              </Grid>
            );
          })}
=======
const PostAnswers = props => {
    const classes = useStyles();
    const { data, userId, userName, onMutate, handleDelete } = props
    console.log(userId)
    return (
        <Grid container direction="row" spacing={1} className={classes.answersContainer}>
            <Grid item xs={3} md={1} ></Grid>
            <Grid item container xs={12} md={9} >
                <Grid container direction="column" wrap="nowrap" spacing={3} className={classes.answersContainer}>
                  {data.map((e, i) => {
                      return (
                          <Grid key={i} item>
                            <PostAnswer data={e} userId={userId} userName={userName} onMutate={onMutate} handleDelete={handleDelete}/>
                          </Grid>
                          
                        )
                  })
                  }
                </Grid>
            </Grid>
            <Grid item xs md={2} ></Grid>
>>>>>>> Delete Api and UI components
        </Grid>
      </Grid>
      <Grid item xs md={2}></Grid>
    </Grid>
  );
};

export default PostAnswers;
