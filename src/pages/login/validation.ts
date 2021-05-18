import * as yup from "yup";

// const phoneRegExp = /^(\d{3}\s?)(\d{3}\s?)(\d{2}\s?)(\d{2})$/;

export const loginValidationSchema = yup.object({
  // phoneNumber: yup.string().matches(phoneRegExp).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  remember: yup.boolean()
});
