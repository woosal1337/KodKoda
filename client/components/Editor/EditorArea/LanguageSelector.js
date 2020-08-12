import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import languages from "../../../src/languages";
import { nominalTypeHack } from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px 0px",
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
  tag: {
    color: "#fff",
  },
  inputRoot: {
    "& fieldset": {
      border: "1px solid #fff",
    },
  },
}));

const LanguageSelector = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        classes={classes}
        multiple
        id="tags-standard"
        options={languages.map((language) => language.name)}
        getOptionLabel={(option) => option}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const selectedLanguage = languages.find((language) => {
              return language.name === option;
            });
            return (
              <Chip
                variant="standard"
                label={option}
                {...getTagProps({ index })}
                style={{ backgroundColor: selectedLanguage.color }}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Programlama Dilleri"
            placeholder="Dil Seçiniz"
          />
        )}
      />
    </div>
  );
};

export default LanguageSelector;
