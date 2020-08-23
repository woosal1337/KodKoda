import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Link from "../Link";
import MUIRichTextEditor from "mui-rte";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";
import theme from "../../src/theme";
import palette from "../../src/palette";
import EmojiBar from "./Emoji/EmojiBar";
import Emoji from "react-emoji-render";

const updateTheme = {
  ...theme,
  overrides: {
    ...theme.overrides,

    MUIRichTextEditor: {
      ...theme.overrides.MUIRichTextEditor,
      editor: {
        ...theme.overrides.MUIRichTextEditor.editor,
        padding: 0,
        minHeight: 100,
      },
      editorContainer: {
        ...theme.overrides.MUIRichTextEditor.editorContainer,
        padding: 0,
      },
    },
  },
};

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
  rightTitle: {
    lineHeight: "29px",
  },
  divider: {
    marginBottom: 20,
    backgroundColor: "#d7d7d7",
  },
  postContainer: {},
  postGridContainer: {
    marginTop: 20,
  },
  answersContainer: {},
  answerContainer: {
    minHeight: 120,
    //maxWidth:300
  },
  answerPoster: {},
  answerPosterContainer: {
    marginTop: 20,
  },
  answerText: {
    marginTop: 5,
    fontSize: 16,
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

const PostAnswer = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { data } = props;

  return (
    <>
      <Divider className={classes.divider} />
      <Grid
        container
        direction="row"
        spacing={1}
        className={classes.answersContainer}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="left"
          xs={1}
          md={1}
          className={classes.buttons}
        >
          <Grid item>
            <IconButton
              edge="start"
              className={classes.voteButton}
              aria-label="menu"
            >
              <ExpandLessIcon className={classes.voteMore} />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography className={classes.voteCount}>
              {data.voteCount}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={10} md={10}>
          <Grid
            container
            direction="column"
            justify={"space-between"}
            className={classes.answerContainer}
          >
            <Grid item>
              {data.body.blocks ? (
                <MuiThemeProvider theme={updateTheme}>
                  <MUIRichTextEditor
                    readOnly={true}
                    toolbar={false}
                    defaultValue={JSON.stringify(data.body)}
                  />
                </MuiThemeProvider>
              ) : (
                <Typography
                  variant="body1"
                  component="body"
                  className={classes.questionText}
                >
                  {data.body.charAt(0).toUpperCase() + data.body.slice(1)}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <Grid item className={classes.answerPosterContainer}>
                <Link href="/user/[id]/" as={`/user/${data.ownerUserId}`}>
                  <Typography className={classes.answerPoster}>
                    @{data.ownerName}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid>
              <EmojiBar reaction={props.reaction} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PostAnswer;
