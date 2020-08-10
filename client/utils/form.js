import isNumber from "lodash/isNumber";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;

export const editorValidations = values => {
  let errors = {};
  if (!values.title) errors.title = "Required";
  if (!values.body) errors.body = "Required";
  //if (!values.language) errors.language = "Required";

  return errors;
};
