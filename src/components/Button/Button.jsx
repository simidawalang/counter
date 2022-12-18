import React from "react";

const Button = ({ type, content, bgColor, onClick }) => {
  return (
    <button type={type} className={`${bgColor} btn`} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
