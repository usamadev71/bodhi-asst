import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="form-component">
      <h4>Thank You!</h4>
      <Link to={"/"}>Submit Another Form</Link>
    </div>
  );
};

export default ThankYouPage;
