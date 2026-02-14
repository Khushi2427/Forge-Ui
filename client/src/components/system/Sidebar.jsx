import React from "react";

const Sidebar = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`min-h-screen w-80 bg-gray-100 text-black p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Sidebar;