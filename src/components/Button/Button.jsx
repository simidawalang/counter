import React from "react";

const Button = ({ type, content, bgColor, className, onClick }) => {
  return (
    <button
      type={type}
      className={`btn btn-${bgColor} ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
