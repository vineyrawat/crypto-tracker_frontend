import React from "react";
import { useTheme } from "../../hooks";
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggleButton(props) {
  const { theme, themeToggle } = useTheme();

  return (
    <button
      className="fixed right-3 bottom-14 z-10 h-12 w-12 focus:outline-none rounded-full flex items-center justify-center bg-white shadow-lg dark:bg-gray-700 border-2 border-gray-400"
      onClick={themeToggle}
    >
      {" "}
      {theme === "dark" ? <FiSun size={25} /> : <FiMoon size={25} />}
    </button>
  );
}

export default ThemeToggleButton;
