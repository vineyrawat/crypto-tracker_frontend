import React from "react";

function Button({
  children,
  isFullWidth,
  variant,
  isLoading,
  disabled,
  onClick,
  type,
}) {
  const variants = {
    primary: "bg-primary focus:bg-primaryDark dark:text-gray-800",
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

  variant = isLoading ? variants.loading : scheme();

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center justify-center h-12 px-3 text-lg font-semibold hover:opacity-90 tracking-wide ${variant} ${
          isFullWidth ? "w-full" : "w-max"
        }`}
        disabled={isLoading ? true : disabled}
      >
        {isLoading ? (
          <div className="w-7 h-7 border-2 border-b-[transparent] rounded-full border-gray-400 animate-spin"></div>
        ) : (
          children
        )}
      </button>
    </>
  );
}

export default Button;
