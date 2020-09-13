import React from "react";

import languages from "../../../src/languages";
import Tag from "./Tag";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tagsContainer: {
    paddingLeft: 15,
  },
  label: {
    padding: 10,
  },
}));

const Tags = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Typography align="center" variant="h4" className={classes.label}>
        Bütün Etiketler
      </Typography>
      <Grid container className={classes.tagsContainer}>
        {languages.map((language) => {
          return <Tag label={language.name} color={language.color} />;
        })}
      </Grid>
    </Grid>
  );
};

export default Tags;
