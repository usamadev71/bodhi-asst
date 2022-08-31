import React, { useContext } from "react";
import Select from "react-select";
import { AppContext } from "../contexts/app.context";
import { useNavigate } from "react-router-dom";
import { statesArray } from "../utils/constants.util";
import { useFormik } from "formik";
import { ShippingDetailsSchema } from "../schemas/form.schema";
import { pages } from "../utils/constants.util";

const ShippingDetailsPage = () => {
  const navigate = useNavigate();
  const { formState, handleBlur } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      street: formState.street,
      city: formState.city,
      zip: formState.zip,
      state: formState.state,
    },
    validationSchema: ShippingDetailsSchema,

    onSubmit: (formData) => {
      console.log("formData", formData);
      console.log("formState", formState);
      navigate(pages.paymentDetails);
    },
  });

  return (
    <div className="form-component">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>
            Street <span className="red">*</span>:
          </label>
          <input
            id="street"
            type="text"
            name="street"
            placeholder="Street"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            defaultValue={formik.values.street}
          />
          {formik.errors.street && (
            <p className="text-danger">{formik.errors.street}</p>
          )}
        </div>

        <div className="form-control">
          <label>
            City <span className="red">*</span>:
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            defaultValue={formik.values.city}
          />
          {formik.errors.city && (
            <p className="text-danger">{formik.errors.city}</p>
          )}
        </div>

        <div className="form-control">
          <label>
            State <span className="red">*</span>:
          </label>
          <Select
            className="margin-bottom"
            options={statesArray}
            onChange={(e) =>
              formik.handleChange({ target: { name: "state", value: e.value } })
            }
            onBlur={(e) =>
              handleBlur({
                target: { name: "state", value: formik.values.state },
              })
            }
            defaultValue={statesArray[0]}
          />
        </div>

        <div className="form-control">
          <label>
            Zip Code <span className="red">*</span>:
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            placeholder="ZIP Code"
            onChange={formik.handleChange}
            onBlur={handleBlur}
            defaultValue={formik.values.zip}
          />
          {formik.errors.zip && (
            <p className="text-danger">{formik.errors.zip}</p>
          )}
        </div>

        <div>
          <button onClick={() => navigate("/")}>Previous</button>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetailsPage;
