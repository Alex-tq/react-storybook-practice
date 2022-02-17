import React from "react";

function Input(props) {
  const { size, ...rest } = props;
  return <input type="text" className={size} {...rest} />;
}

export default Input;
