import React, { useState } from "react";
import { validate } from "./validators";

const INPUT_STATES = {
  UNTOUCHED: "UNTOUCHED",
  VALID: "VALID",
  INVALID: "INVALID",
};

const Input = (props) => {
  const [value, setValue] = useState(null);
  const [Valid, setValid] = useState(true);
  const [touched, setTouched] = useState(false);
  return (
    // form-input--invalid
    <div
      className={`form-input  ${!Valid && touched && "form-input--invalid"}`}
      data-testid="form-input"
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setValid(validate(e.target.value, props.validators));
        }}
        onBlur={(e) => {
          setTouched(true);
          setValid(validate(e.target.value, props.validators));
        }}
      />
      <p> {!Valid && touched && props.errorText}</p>
    </div>
  );
};

export default Input;
