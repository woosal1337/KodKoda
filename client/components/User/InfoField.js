import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: 20,
    display: "flex",
  },
  label: {
    fontWeight: "bold",
  },
  TextFieldContainer: {
    marginBottom: 20,
  },
}));

const InfoField = (props) => {
  const classes = useStyles();
  const { label, isDisabled, value, handleChange } = props;

  if (isDisabled) {
    return (
      <Grid item className={classes.container}>
        <Typography variant="h5" className={classes.label}>
          {label}:
        </Typography>

        <Typography variant="h5" style={{ marginLeft: 20 }}>
          {value}
        </Typography>
      </Grid>
    );
  } else {
    return (
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
          label={label}
          rowsMax={4}
          disabled
          value={value}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    );
  }
};

export default InfoField;
