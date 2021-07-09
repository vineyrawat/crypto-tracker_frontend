import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const User = ({ small, title, subtitle }) => {
  return (
    <div className="flex cursor-pointer items-center select-none">
      {small || (
        <div className="flex flex-col justify-center items-end mr-3">
          <h1 className="font-heading">{title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
      )}
      <button className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:text-gray-300 focus:ring-2 focus:outline-none">
        <AiOutlineUser size={20} />
      </button>
    </div>
  );
};

export default User;
