import * as Yup from "yup";

export const PersonalDetailsSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

export const ShippingDetailsSchema = Yup.object().shape({
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  zip: Yup.string().required("Zip is required"),
});

export const PaymentDetailsSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .label("Credit Card Number")
    .max(16)
    .required("Credit Card number is required"),
  cardExp: Yup.string().required("Credit Card expiry is required"),
  cardCVC: Yup.string()
    .label("CVC")
    .min(3)
    .max(4)
    .required("Credit Card CVC is required"),
});
