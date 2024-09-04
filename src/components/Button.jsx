import React from "react";

const Button = ({ text, number }) => {
  return (
    <button className="border border-light/20 px-8 md:px-10 lg:px-12 py-2 lg:py-4 rounded-[60px] relative overflow-hidden text-center">
      <p className="text-xl lg:text-2xl text-light/70 z-10 relative -translate-x-1">
        {text}
        <span className="text-[11px] md:text-xs absolute top-[-10%] left-[100%] z-10">
          {number}
        </span>
      </p>

      <div className="hidden md:block circ"></div>
    </button>
  );
};

export default Button;
