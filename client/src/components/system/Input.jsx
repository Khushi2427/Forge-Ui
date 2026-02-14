import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full border rounded-lg px-4 py-3 text-right text-lg font-semibold text-black focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
};

export default Input;