import { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const rootClass = document.getElementById("root").classList;
  rootClass.add(localStorage.getItem("theme"));

  const setDark = () => {
    rootClass.add("dark");
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  };
  const setLight = () => {
    rootClass.remove("dark");
    setTheme("light");
    localStorage.setItem("theme", "light");
  };

  const themeToggle = () => {
    theme === "light" ? setDark() : setLight();
  };

  return { theme, setDark, setLight, themeToggle };
}

export default useTheme;
