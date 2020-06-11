import * as Yup from "yup";
const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, "Email length is too short")
    .max(50, "less than 50 char ")
    .email("Please enter valid email")
    .required("Email is required"),
  pass: Yup.string()
    .min(4, "Minimum 8 char enter in field")
    .max(30, "less than 30 char ")
    .required("password is required"),
  name: Yup.string()
    .min(2, "Minimum 2 char enter in field")
    .max(100, "less than 100 char ")
    .required("password is required"),
  phone: Yup.string()
    .min(10, "Minimum 10 char enter in field")
    .max(12, "less than 12 char ")
    .required("password is required"),
  address: Yup.string()
    .min(5, "Minimum 5 char enter in field")
    .max(100, "less than 100 char ")
    .required("password is required"),
});
export default ContactSchema;