import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import ListIcon from "@material-ui/icons/List";
import Link from "../../Link";
import BetterEditor from "./BetterEditor";

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
  rightTitle: {
    lineHeight: "29px",
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  postContainer: {},
  postGridContainer: {
    marginTop: 20,
  },
  editorContainer: {
    minHeight: 200,
  },
  leftColumnContainer: {
    maxWidth: 120,
  },
  editorText: {
    marginTop: 5,
    fontSize: 18,
    lineHeight: 1.5,
  },
  buttons: {
    marginTop: -6,
    marginLeft: 4,
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
  typography: {
    padding: theme.spacing(1),
  },
  bold: {
    fontWeight: "bold",
    color: "#ff921e",
    padding: theme.spacing(0.5),
    fontSize: 16,
  },
  tipsIcon: {
    marginLeft: 20,
    cursor: "pointer",
    transition: "all 0.25s ease-in-out",
    "&:hover": {
      color: "#ff921e",
    },
  },
  listIcon: {
    verticalAlign: "middle",
  },
}));

const EditorArea = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid container direction="row" spacing={1} wrap="nowrap">
      <Grid
        item
        direction="column"
        alignItems="left"
        xs={12}
        md={1}
        className={classes.buttons}
      >
        <Grid item>
          <CreateIcon className={classes.voteMore} />
        </Grid>
        <Grid item>
          <Typography className={classes.voteCount}></Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={9}>
        <Grid
          container
          direction="column"
          justify={"space-between"}
          className={classes.editorContainer}
        >
          <Grid item>
            <BetterEditor />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={2} className={classes.leftColumnContainer}>
        <Grid container direction="column">
          <Grid item>
            <Tooltip TransitionComponent={Zoom} title="Öneriler" arrow>
              <TextFormatIcon
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                fontSize="large"
                className={classes.tipsIcon}
              />
            </Tooltip>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes.typography}>
                Kod parçaları için{" "}
                <span className={classes.bold}>
                  {"<"}
                  {" >"}
                </span>{" "}
                kullanabilirsiniz.
              </Typography>
              <Typography className={classes.typography}>
                Vurgu yapmak istediğiniz kelimeler için{" "}
                <span className={classes.bold}>B </span>
                kullanabilirsiniz.
              </Typography>
              <Typography className={classes.typography}>
                Listeleme yapmak için
                <span className={`${classes.bold} ${classes.listIcon}`}>
                  <ListIcon />
                </span>
                kullanabilirsiniz.
              </Typography>
            </Popover>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditorArea;
