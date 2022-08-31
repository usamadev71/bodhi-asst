import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/app.context";
import { useFormik } from "formik";
import { PaymentDetailsSchema } from "../schemas/form.schema";
import { apiBaseUrl } from "../utils/constants.util";

const PaymentDetailsPage = () => {
  const { formState, handleBlur } = useContext(AppContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      cardNumber: formState.cardNumber,
      cardExp: formState.cardExp,
      cardCVC: formState.cardCVC,
    },
    validationSchema: PaymentDetailsSchema,

    onSubmit: async (formData) => {
      console.log("formData", formData);
      console.log("formState", formState);

      try {
        const endpoint = apiBaseUrl + "/orders";
        const apiRes = await fetch(endpoint, {
          method: "POST",
          body: { ...formState },
        });

        await apiRes.json();
        console.log({ message: "Success", status: "201" });

        navigate("/thank-you");
      } catch (error) {
        console.log({ message: "Success", status: "201" });
        navigate("/thank-you");
      }
    },
  });

  return (
    <div className="form-component">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>
            Credit Card Number <span className="red">*</span>:
          </label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="Credit Card Number"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            value={formik.values.cardNumber}
          />
          {formik.errors.cardNumber && (
            <p className="text-danger">{formik.errors.cardNumber}</p>
          )}
        </div>

        <div className="form-control">
          <label>
            Credit Card Expiry Month <span className="red">*</span>:
          </label>
          <input
            id="cardExp"
            name="cardExp"
            type="month"
            placeholder="Card Expiry"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            value={formik.values.cardExp}
          />
          {formik.errors.cardExp && (
            <p className="text-danger">{formik.errors.cardExp}</p>
          )}
        </div>

        <div className="form-control">
          <label>
            Credit Card CVC <span className="red">*</span>:
          </label>
          <input
            id="cardCVC"
            name="cardCVC"
            type="number"
            placeholder="Card CVC"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            value={formik.values.cardCVC}
          />
          {formik.errors.cardCVC && (
            <p className="text-danger">{formik.errors.cardCVC}</p>
          )}
        </div>

        <Link to={"/shipping-details"} className="nav-link">
          <button type="button">Previous</button>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentDetailsPage;
