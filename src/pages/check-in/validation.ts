import * as yup from "yup";

// const phoneRegExp = /^(\d{3}\s?)(\d{3}\s?)(\d{2}\s?)(\d{2})$/;

export const checkinValidationSchema = yup.object({
  // phoneNumber: yup.string().matches(phoneRegExp).required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().required(),
  password: yup.string().required(),
});
