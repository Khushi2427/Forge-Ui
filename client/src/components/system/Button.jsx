import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;