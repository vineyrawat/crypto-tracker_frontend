import React from "react";

const TextArea = ({ placeholder, name, id, onChange }) => {
  return (
    <>
      <textarea
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className="w-full bg-gray-50 dark:bg-gray-700 p-2 px-3 text-lg mb-5 border-2 dark:border-gray-600 focus:outline-none focus:border-primary focus:bg-transparent text-gray-600 dark:text-gray-300"
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default TextArea;
