import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`border rounded px-3 py-2 w-full outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
};

export default Input;