import React from "react";

const Sidebar = ({ children, className = "" }) => {
  return (
    <aside
      className={`w-64 min-h-screen bg-gray-100 p-4 ${className}`}
    >
      {children}
    </aside>
  );
};

export default Sidebar;