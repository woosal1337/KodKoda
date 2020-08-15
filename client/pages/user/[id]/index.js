import { useRouter } from "next/router";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useSWR from "swr";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import { Button } from "@material-ui/core";

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

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
    marginBottom: 40,
  },
  TextFieldContainer: {
    marginBottom: 20,
  },
}));

function Post() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    username: "ekremtas",
    name: "Ekrem",
    email: "eekremtas@gmail.com",
  });
  const [selfUser, setSelfUser] = useState(true);
  const handleChange = (event) => {
    setValues(event.target.value);
  };

  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data } = useSWR(`/api/user/${id}`, fetcher);
  if (!data) {
    return "Loading...";
  }
  console.log(data);
  return (
    <Container fixed>
      <Grid container item>
        <Card className={classes.root}>
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
              <Grid xs={4}>
                <CardMedia
                  className={classes.media}
                  image="https://www.gastrofests.com/wp-content/uploads/2018/11/person-default.png"
                  title="Paella dish"
                />
              </Grid>
              <Grid className={classes.avatarContainer} item xs={12}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {data.name.charAt(0).toUpperCase()}
                </Avatar>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              item
              xs={8}
              className={classes.formInputContainer}
            >
              <TextField
                className={classes.TextFieldContainer}
                id="outlined-multiline-flexible-1"
                label="Kullanıcı Adı"
                multiline
                InputProps={{
                  readOnly: !selfUser,
                }}
                rowsMax={4}
                value={values.username}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              item
              xs={8}
              className={classes.formInputContainer}
            >
              <TextField
                className={classes.TextFieldContainer}
                id="outlined-multiline-flexible-2"
                label="Ad Soyad"
                multiline
                InputProps={{
                  readOnly: !selfUser,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                rowsMax={4}
                value={values.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              item
              xs={8}
              className={classes.formInputContainer}
            >
              <TextField
                className={classes.TextFieldContainer}
                id="outlined-multiline-flexible-3"
                label="Email"
                multiline
                InputProps={{
                  readOnly: !selfUser,
                }}
                rowsMax={4}
                value={values.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            {selfUser ? (
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                item
                xs={8}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setSelfUser(false);
                  }}
                >
                  Farklı kullanıcının gördüğü
                </Button>{" "}
              </Grid>
            ) : null}
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              item
              xs={8}
            >
              {" "}
              ID ile gelen kullanıcı -
              <h2 xs={4}>
                {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              </h2>
              <h2 xs={4}>{data.username ? data.username : "username"}</h2>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
}

export default Post;
