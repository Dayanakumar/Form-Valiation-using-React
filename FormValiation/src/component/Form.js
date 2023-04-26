import React from "react";
import FormSignup from "./FormSignup";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img
            src="https://t4.ftcdn.net/jpg/03/20/56/13/360_F_320561317_VKDtp6pxVvLEN8499GqD7jiavZ4MOMGj.jpg"
            alt="left"
            className="form-img"
          />
        </div>

        <FormSignup />
      </div>
    </>
  );
};

export default Form;
