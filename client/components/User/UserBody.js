import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { orange } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";

import InfoField from "./InfoField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: 25,
    marginTop: 25,
  },
  media: {
    maxWidth: 400,
    height: 0,
    paddingTop: "56.25%", // 16:9
    display: "block",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: orange[500],
    width: 70,
    height: 70,
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },

  formInputContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

const UserBody = (props) => {
  const classes = useStyles();
  const { data, user, handleChange } = props;

  return (
    <Grid container item>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        item
        xs={12}
      >
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          item
          xs={12}
        >
          <Grid className={classes.avatarContainer} item xs={12}>
            {data.photoImageURL ? (
              <Avatar
                aria-label="recipe"
                src={data.photoImageURL}
                className={classes.avatar}
              />
            ) : (
              <Avatar aria-label="recipe" className={classes.avatar}>
                {data.name.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          container
          xs={8}
          className={classes.formInputContainer}
        >
          {user && (
            <>
              <InfoField
                label="Ad Soyad"
                isDisabled={user.id !== data.id}
                value={data.name}
                handleChange={handleChange}
              />
              <InfoField
                label="Kullanıcı Adı"
                isDisabled={user.id !== data.id}
                value={data.username}
                handleChange={handleChange}
              />

              <InfoField
                label="Email"
                isDisabled={user.id !== data.id}
                value={data.email}
                handleChange={handleChange}
              />
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserBody;
