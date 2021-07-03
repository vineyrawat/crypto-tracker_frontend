import React from "react";

function Logo({ className }) {
  return (
    <>
      <h2
        className={`text-2xl font-heading font-semibold select-none  ${className}`}
      >
        Crypto
        <span className="text-primary">Tracker</span>
      </h2>
    </>
  );
}

export default Logo;
