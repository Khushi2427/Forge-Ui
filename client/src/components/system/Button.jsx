import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;