import * as yup from "yup";

export const signInValidationResolver = yup.object({
  password: yup.string().required("Password is required!"),
  email: yup.string().trim().email().required("Email is required!"),
});

export const signUpValidationResolver = yup.object({
  password: yup.string().required("Password is required!"),
  confirmPassword: yup.string().required("Confirm Password is required!"),
  name: yup.string().required("Name is required"),
  email: yup.string().trim().email().required("Email is required!"),
});
