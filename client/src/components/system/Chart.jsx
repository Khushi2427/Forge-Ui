import React from "react";

const Chart = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Chart;