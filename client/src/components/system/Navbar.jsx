import React from "react";

const Navbar = ({ children, className = "" }) => {
  return (
    <nav
      className={`w-full px-6 py-3 bg-gray-800 text-white flex items-center justify-between ${className}`}
    >
      {children}
    </nav>
  );
};

export default Navbar;