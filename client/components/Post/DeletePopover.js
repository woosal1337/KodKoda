import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import ListIcon from "@material-ui/icons/List";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import Zoom from "@material-ui/core/Zoom";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  formattingPopover: {
    padding: 10
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
  deleteButton: {
    color: theme.palette.text.secondary,
  },
  delete: {
    fontSize: 20,
    margin: -12,
    marginTop: -18
  },
  done: {
    fontSize: 30,
    margin: -12,
    color: green[500],
    marginTop: -18
  },
  close: {
    fontSize: 30,
    margin: -12,
    color: red[500],
    marginTop: -18
  },
}));



const DeletePopover = props => {
  const classes = useStyles();
  const { data, userId, userName, handleDelete } = props
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Tooltip TransitionComponent={Zoom} title="Sil" arrow>
        <DeleteIcon
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
        <div className={classes.formattingPopover}>
          <Grid container direction="row" pacing={1} justify={"space-around"}>
            <Grid item>
              <Typography className={classes.typography}>
                Girdinizi silmek istediğinize emin misiniz?
                      </Typography>
            </Grid>
            <Grid container direction="row" spacing={1} justify={"space-around"}>
              <Grid item>
                <DoneIcon className={classes.done} />
              </Grid>
              <Grid item>
                <CloseIcon className={classes.close} />
              </Grid>
            </Grid>
          </Grid>

        </div>
      </Popover>
    </div>
  )
}

export default DeletePopover;