import React from "react";

const Table = ({ children, className = "", ...props }) => {
  return (
    <table
      className={`w-full border-separate border-spacing-2 text-black ${className}`}
      {...props}
    >
      {children}
    </table>
  );
};

export default Table;