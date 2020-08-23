import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import PostQuestion from "./PostQuestion";
import PostAnswers from "./PostAnswers";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  title: {
    fontSize: 36,
    fontFamily: "Hind, sans-serif",
    fontWeight: 700,
  },
  oops: {
    fontSize: 28,
    fontFamily: "Hind, sans-serif",
    fontWeight: 700,
  },
  rightTitle: {
    lineHeight: "29px",
  },
  divider: {
    marginTop: 10,
    marginBottom: 20,
  },
  postContainer: {},
  postGridContainer: {
    marginTop: 20,
  },
  questionContainer: {
    minHeight: 200,
  },
  leftColumnContainer: {
    maxWidth: 120,
  },
  questionText: {
    marginTop: 5,
    fontSize: 18,
    lineHeight: 1.5,
  },
  buttons: {
    marginTop: -6,
    marginLeft: 4,
  },
  voteButton: {
    color: theme.palette.text.secondary,
  },
  voteCount: {},
  voteMore: {
    fontSize: 40,
    margin: -12,
  },
  voteLess: {
    fontSize: 40,
    margin: -12,
    marginTop: -18,
  },
  languageButton: {
    background:
      "linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)",
    borderRadius: 3,
    boxShadow: "none",
    border: 0,
    fontSize: 14,
    fontWeight: 600,
    color: "white",
    height: 24,
    padding: "0 10px",
  },
}));

const PostBody = (props) => {
  const classes = useStyles();
  const { userId, userName, data, mutate, onMutate } = props;
  console.log(data);

  const [reaction, setReaction] = useState({
    q: {
      likes: data.q.likeCount,
      claps: data.q.clapCount,
      confuseds: data.q.confusedCount,
    },
    a: {
      ...data.a.map((el) => {
        return {
          likes: el.likeCount,
          claps: el.clapCount,
          confuseds: el.confusedCount,
        };
      }),
    },
  });

  // const [reaction, setReaction] = useState({
  //   q: { likes: 3, claps: 1, confuseds: 2 },
  //   a: {
  //     0: { likes: 5, claps: 4, confuseds: 1 },
  //     1: { likes: 2, claps: 1, confuseds: 3 },
  //   },
  // });

  const reactionUpvoteHandler = (reactionType, postType, i) => {
    if (postType === "a") {
      setReaction({
        ...reaction,
        [postType]: {
          ...Object.keys(reaction[postType]).map((el) => {
            if (i === parseInt(el)) {
              return {
                ...reaction[postType][el],
                [reactionType]: reaction[postType][el][reactionType] + 1,
              };
            } else {
              return { ...reaction[postType][el] };
            }
          }),
        },
      });
    } else {
      setReaction({
        ...reaction,
        [postType]: {
          ...reaction[postType],
          [reactionType]: reaction[postType][reactionType] + 1,
        },
      });
    }
  };

  return (
    <Grid container alignItems="stretch">
      {!data.q ? (
        <Typography
          variant="h3"
          component="h3"
          className={classes.oops}
          gutterBottom
        >
          Yüklenemedi, tekrar deneyin.
        </Typography>
      ) : (
        <>
          <Typography
            variant="h3"
            component="h3"
            className={classes.title}
            gutterBottom
          >
            {data.q.title.charAt(0).toUpperCase() + data.q.title.slice(1)}
          </Typography>
          <Grid container direction="column" wrap="nowrap">
            <Divider className={classes.divider} />
            <PostQuestion
              data={data}
              id={data.id}
              userId={userId}
              userName={userName}
              mutate={mutate}
              onMutate={onMutate}
              reaction={reaction.q}
              reactionUpvoteHandler={reactionUpvoteHandler}
            />
            <PostAnswers
              data={data.a}
              reaction={reaction.a}
              reactionUpvoteHandler={reactionUpvoteHandler}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default PostBody;
