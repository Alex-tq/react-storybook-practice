import React from "react";
import "./Input.css";

function Input(props) {
  const { size = "medium", ...rest } = props;
  return <input type="text" className={`${size}`} {...rest} />;
}

export default Input;
