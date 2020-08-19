import isNumber from "lodash/isNumber";
import * as Yup from 'yup';
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;


export const editorValidationSchema = Yup.object().shape({
  title: Yup.string()
   .min(5, 'Please enter no less than 5 characters')
   .required( 'Başlığı unuttun canım' ),
  body: Yup.object().shape({
    blocks: Yup.array().of(
        Yup.object().shape({
          text: Yup.string().min(10, 'too short').required('Required')
      }))
    })
   .required("What's happening here?"),
  languages: Yup.array().of(Yup.string()).required('Must have language')
 });

export const editorValidations = values => {
  let errors = {};
  if (!values.title) errors.title = "Required";
  if (!values.body) errors.body = "Required";
  //if (!values.language) errors.language = "Required";

  return errors;
};

export const responseEditorValidations = values => {
  let errors = {};
  if (!values.body) errors.body = "Required";
  //if (!values.language) errors.language = "Required";
  return errors;
};
