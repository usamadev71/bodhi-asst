import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/app.context";
import { PersonalDetailsSchema } from "../schemas/form.schema";
import { pages } from "../utils/constants.util";

const PersonalDetailsPage = () => {
  const navigate = useNavigate();

  const { formState, handleBlur } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      phone: formState.phone,
    },
    validationSchema: PersonalDetailsSchema,

    onSubmit: (formData) => {
      console.log("formData", formData);
      console.log("formState", formState);
      navigate(pages.shippingDetails);
    },
  });

  return (
    <div className="form-component">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>
            First Name <span className="red">*</span>:
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            defaultValue={formik.values.firstName}
          />
          {formik.errors.firstName && (
            <p className="text-danger">{formik.errors.firstName}</p>
          )}
        </div>

        <div className="form-control">
          <label>
            Last Name <span className="red">*</span>:
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            defaultValue={formik.values.lastName}
          />
          {formik.errors.lastName && (
            <p className="text-danger">{formik.errors.lastName}</p>
          )}
        </div>

        <div className="form-control">
          <label>
            Email <span className="red">*</span>:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            defaultValue={formik.values.email}
          ></input>
          {formik.errors.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
        </div>

        <div className="form-control">
          <label>Phone:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            defaultValue={formik.values.phone}
          ></input>
        </div>

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default PersonalDetailsPage;
