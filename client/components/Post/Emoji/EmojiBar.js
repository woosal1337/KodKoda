import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Emoji from "react-emoji-render";
import Badge from "@material-ui/core/Badge";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "15px 0px",
  },
  iconButton: {
    transition: "all .3s ease-in-out",
    "&:hover": {
      backgroundColor: "#dddddd30",
      transform: "scale(1.1)",
    },
  },
  badge: {
    padding: "5px",
  },
}));

const EmojiBar = (props) => {
  const classes = useStyles();
  const { likeCount, clapCount, confusedCount } = props.reaction;
  return (
    <div className={classes.wrapper}>
      <IconButton
        edge="start"
        className={classes.iconButton}
        onClick={() =>
          props.reactionUpvoteHandler(
            "likeCount",
            props.postType,
            props.index,
            props.postId
          )
        }
      >
        <Badge badgeContent={likeCount} className={classes.badge}>
          <Emoji text=":+1:" />
        </Badge>
      </IconButton>

      <IconButton
        className={classes.iconButton}
        onClick={() =>
          props.reactionUpvoteHandler(
            "clapCount",
            props.postType,
            props.index,
            props.postId
          )
        }
      >
        <Badge badgeContent={clapCount} className={classes.badge}>
          <Emoji text=":clapping_hands:" />
        </Badge>
      </IconButton>
      <IconButton
        className={classes.iconButton}
        onClick={() =>
          props.reactionUpvoteHandler(
            "confusedCount",
            props.postType,
            props.index,
            props.postId
          )
        }
      >
        <Badge badgeContent={confusedCount} className={classes.badge}>
          <Emoji text=":confused:" />
        </Badge>
      </IconButton>
    </div>
  );
};

export default EmojiBar;
