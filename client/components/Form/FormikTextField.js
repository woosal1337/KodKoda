import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import InfoTooltip from "../InfoTooltip";

const styles = theme => ({
  root:  { display: "flex", alignItems: "center"},
  container: {
    width:"135px",

  },
  label: { fontSize: 18, paddingRight: 20},
  [theme.breakpoints.up("md")]: {
    textFieldContainer: { marginLeft: "1em" }
  }
});

const FormikTextField = ({
  name,
  validate,
  label,
  placeholder,
  classes,
  ...props
}) => (
  <Field name={name} validate={validate}>
    {({ field, form }) => (
      <div className={classes.root}>
          {label && (
            <div className={classes.container}>
              <Typography className={classes.label}>
                {label}
              </Typography>
              {props.infoTooltip ? (
                <InfoTooltip infoTooltip={props.infoTooltip} />
              ) : null}
            </div>
          )}
          <TextField
            variant="outlined"
            error={form.touched[field.name] && !!form.errors[field.name]}
            helperText={
              form.touched[field.name] ? form.errors[field.name] : null
            }
            placeholder={placeholder}
            {...field}
            {...props}
          />
      </div>
    )}
  </Field>
);

FormikTextField.propTypes = {
  name: PropTypes.string,
  validate: PropTypes.func,
  label: PropTypes.string
};

export default withStyles(styles)(FormikTextField);
