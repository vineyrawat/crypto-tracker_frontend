import React from "react";
import {
  BsCheckCircle,
  BsExclamationCircle,
  BsQuestionCircle,
  BsXCircle,
} from "react-icons/bs";

const Alert = ({ type, title, message, hidden, className }) => {
  const scheme = () => {
    switch (type) {
      case "success":
        return " bg-green-400 border-green-400 text-green-800 dark:text-green-400";
      case "danger":
        return " bg-red-400 border-red-400 text-red-800 dark:text-red-400";
      case "warning":
        return " bg-yellow-400 border-yellow-400 text-yellow-700 dark:text-yellow-400";
      case "info":
        return " bg-teal-400 border-teal-400 text-teal-700 dark:text-teal-400";
      default:
        return "bg-gray-100 border-gray-400 text-gray-800 dark:text-gray-100 ";
    }
  };

  const icon = () => {
    if (type === "danger") return <BsXCircle className="w-full" size={25} />;
    if (type === "warning")
      return <BsExclamationCircle className="w-full" size={25} />;
    if (type === "success")
      return <BsCheckCircle className="w-full" size={25} />;
    if (type === "info")
      return <BsQuestionCircle className="w-full" size={25} />;
  };

  return (
    <>
      {(!title && !message) || hidden || (
        <div
          className={`flex p-3 w-full border-l-8 bg-opacity-10 ${scheme()} ${className}`}
        >
          <div className="min-w-max mr-2 mt-1">{icon()}</div>
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
