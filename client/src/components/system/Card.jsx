import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white text-black shadow-lg rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;