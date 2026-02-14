import React from "react";

const Table = ({ children, className = "", ...props }) => {
  return (
    <div className="overflow-x-auto">
      <table
        className={`min-w-full border-collapse ${className}`}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

export default Table;