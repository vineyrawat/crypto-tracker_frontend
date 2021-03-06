import React from "react";

function Button({
  children,
  isFullWidth,
  variant,
  isLoading,
  disabled,
  onClick,
  type,
  className,
  size,
}) {
  const variants = {
    primary: "bg-primary text-white focus:bg-primaryDark dark:text-gray-800",
    gray: "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200",
    loading:
      "bg-gray-100 dark:bg-gray-700 text-gray-600 cursor-not-allowed select-none",
  };

  const scheme = () => {
    switch (variant) {
      case "primary":
        return variants.primary;
      case "gray":
        return variants.gray;
      default:
        return variants.primary;
    }
  };

  const setSize = () => {
    switch (size) {
      case "sm":
        return ["h-7 px-2 text-sm", "w-4 h-4"];
      case "md":
        return ["h-10 px-3 text-md", "w-6 h-6"];
      case "lg":
        return ["h-12 px-4 text-lg", "w-7 h-7"];
      default:
        return ["h-10 px-3 text-md", "w-6 h-6"];
    }
  };

  variant = isLoading ? variants.loading : scheme();

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center justify-center  ${
          setSize()[0]
        } font-semibold hover:opacity-90 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary ${variant} ${
          isFullWidth ? "w-full" : "w-max"
        } ${className}`}
        disabled={isLoading ? true : disabled}
      >
        {isLoading ? (
          <div
            className={`${
              setSize()[1]
            } border-2 border-b-[transparent] rounded-full border-gray-400 animate-spin`}
          ></div>
        ) : (
          children
        )}
      </button>
    </>
  );
}

export default Button;
