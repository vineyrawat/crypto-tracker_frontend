import React from "react";
import Dashboard from "./pages/dashboard";
import { useTheme } from "./components/hooks";
import { FiMoon, FiSun } from "react-icons/fi";
// import HomePage from "./pages/homapage";
function App() {
  const { theme, themeToggle } = useTheme();
  return (
    <div className="min-h-screen font-body dark:bg-gray-900  dark:text-gray-200">
      <button
        className="fixed right-10 bottom-10 h-12 w-12 focus:outline-none rounded-full flex items-center justify-center bg-white shadow-lg dark:bg-gray-700 border-2 border-gray-400"
        onClick={themeToggle}
      >
        {theme === "dark" ? <FiSun size={25} /> : <FiMoon size={25} />}
      </button>
      <Dashboard />
    </div>
  );
}

export default App;
