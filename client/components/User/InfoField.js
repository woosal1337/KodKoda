import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: 20,
    width: "100%",
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    padding: 10,
  },
  value: {
    padding: 10,
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
  },
  TextFieldContainer: {
    marginBottom: 20,
    "& input": {
      color: "#fff",
    },
    "& label": {
      color: "#fff",
    },
  },
}));

const InfoField = (props) => {
  const classes = useStyles();
  const { label, isDisabled, value, handleChange } = props;

  return (
    <Grid item className={classes.container}>
      <Typography variant="h4" className={classes.label}>
        {label}
      </Typography>
      <Divider className={classes.divider} />

      <Typography variant="h5" className={classes.value}>
        {value}
      </Typography>
    </Grid>
  );

  // return (
  //   <Grid container item className={classes.formInputContainer}>
  //     <TextField
  //       className={classes.TextFieldContainer}
  //       id="outlined-multiline-flexible-1"
  //       label={label}
  //       rowsMax={4}
  //       value={value}
  //       onChange={handleChange}
  //       variant="outlined"
  //       fullWidth
  //       InputLabelProps={{
  //         shrink: true,
  //       }}
  //     />
  //   </Grid>
};

export default InfoField;
