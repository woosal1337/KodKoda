import isNumber from "lodash/isNumber";
import * as Yup from "yup";
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;

export const userValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Kullanıcı adı 5 harften uzun olmalı.")
    .required("Kullanıcı adı boş bırakılamaz."),
  fullName: Yup.string()
    .min(3, "Ad Soyad çok kısa.")
    .required("Lütfen ad ve soyad giriniz."),
});

export const responseEditorValidationSchema = Yup.object().shape({
  bodyText: Yup.object()
    .shape({
      blocks: Yup.array().when({
        is: (blocks) => blocks.length == 1,
        then: Yup.array().of(
          Yup.object().shape({
            text: Yup.string()
              .min(5, "Birazcık kısa bir cevap gibi bu.")
              .required("Cevap alanı boş kaldı."),
          })
        ),
      }),
    })
    .required("Burada bir yanlışlık var."),
});

export const editorValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Beş harften daha uzun yazabilirseniz, müthiş olur.")
    .required("Başlığı unuttunuz"),
  bodyText: Yup.object()
    .shape({
      blocks: Yup.array().when({
        is: (blocks) => blocks.length == 1,
        then: Yup.array().of(
          Yup.object().shape({
            text: Yup.string()
              .min(5, "Birazcık kısa bir cevap gibi bu.")
              .required("Cevap alanı boş kaldı."),
          })
        ),
      }),
    })
    .required("Burada bir yanlışlık var."),
  languages: Yup.array()
    .of(Yup.string())
    .required("En az bir dil seçmeniz gerekiyor."),
});

export const editorValidations = (values) => {
  let errors = {};
  if (!values.title) errors.title = "Required";
  if (!values.body) errors.body = "Required";
  //if (!values.language) errors.language = "Required";

  return errors;
};

export const responseEditorValidations = (values) => {
  let errors = {};
  if (!values.body) errors.body = "Required";
  //if (!values.language) errors.language = "Required";
  return errors;
};
