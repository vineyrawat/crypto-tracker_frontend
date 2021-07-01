import React from "react";

const FormInput = ({ placeholder, name, id, onChange, type }) => {
  return (
    <>
      <input
        className="w-full bg-gray-50 p-2 px-3 text-lg mb-5 border-2 focus:outline-none   focus:border-primary focus:bg-transparent text-gray-600"
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default FormInput;
