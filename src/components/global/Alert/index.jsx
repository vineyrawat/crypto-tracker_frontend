import React from "react";
import { motion } from "framer-motion";
import {
  BsCheckCircle,
  BsExclamationCircle,
  BsQuestionCircle,
  BsXCircle,
} from "react-icons/bs";

const Alert = ({ variant, title, message, hidden }) => {
  const scheme = () => {
    switch (variant) {
      case "success":
        return " bg-green-400 border-green-400 text-green-800 dark:text-green-400";
      case "danger":
        return " bg-red-400 border-red-400 text-red-800 dark:text-red-400";
      case "warning":
        return " bg-yellow-400 border-yellow-400 text-yellow-700 dark:text-yellow-400";
      case "info":
        return " bg-teal-400 border-teal-400 text-teal-700 dark:text-teal-400";
      default:
        return " bg-gray-100 border-gray-400 text-gray-800 dark:text-green-gray-100";
    }
  };

  const icon = () => {
    if (variant === "danger")
      return <BsXCircle className="my-2 mr-2 w-6 h-6" size={25} />;
    if (variant === "warning")
      return <BsExclamationCircle className="my-2 mr-2 w-6 h-6" size={25} />;
    if (variant === "success")
      return <BsCheckCircle className="my-2 mr-2 w-6 h-6" size={25} />;
    if (variant === "info")
      return <BsQuestionCircle className="my-2 mr-2 w-6 h-6" size={25} />;
  };

  return (
    <>
      {hidden || (
        <div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "ease-out" }}
          className={`flex p-3 w-full mb-6 border-l-8 bg-opacity-10 ${scheme()}`}
        >
          {icon()}
          <div>
            <h2 className="font-semibold text-lg">{title}</h2>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
