import React from "react";
import {
  BsCheckCircle,
  BsExclamationCircle,
  BsQuestionCircle,
  BsXCircle,
} from "react-icons/bs";

const Alert = ({ variant, title, message }) => {
  const scheme = () => {
    switch (variant) {
      case "success":
        return " bg-green-50 border-green-400 text-green-800";
      case "danger":
        return " bg-red-50 border-red-400 text-red-800";
      case "warning":
        return " bg-yellow-50 border-yellow-400 text-yellow-700";
      case "info":
        return " bg-teal-50 border-teal-400 text-teal-700";
      default:
        return " bg-gray-100 border-gray-400 text-gray-800";
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
      <div className={`flex p-3 mb-6 border-l-8 ${scheme()}`}>
        {icon()}
        <div>
          <h2 className="font-semibold text-lg">{title}</h2>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Alert;
