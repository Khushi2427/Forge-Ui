import React from "react";

const Navbar = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Navbar;