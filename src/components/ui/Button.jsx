import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`${className} px-4 py-2 bg-primary rounded-md`}>
      {children}
    </button>
  );
};

export default Button;
