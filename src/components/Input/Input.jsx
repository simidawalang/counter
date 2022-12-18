import React from "react";

const Input = ({ type, onChange, value, placeholder, required }) => {
  return (
    <input
      type={type}
      className={`input`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
