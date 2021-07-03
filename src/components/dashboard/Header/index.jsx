import React, { useState } from "react";
import Logo from "../../homepage/Header/Logo";
import User from "./User";

const MenuItem = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-full px-3 flex items-center transition-colors focus:outline-none justify-center dark:text-gray-300 tracking-wider uppercase font-semibold border-b-2  ${
        active
          ? "border-primary bg-primary bg-opacity-10 text-primary dark:text-primary"
          : "border-transparent"
      }`}
    >
      {children}
    </button>
  );
};

function DashboardHeader(props) {
  const [active, setActive] = useState("watchlist");
  return (
    <>
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="h-16 flex justify-between items-center mx-5">
          <Logo className="text-[20px]" />
          <User title="Vinay Rawat" subtitle="vineyrawat@yahoo.com" />
        </div>
        <div className="h-10 flex justify-center fixed bottom-0 w-full bg-gray-800 sm:justify-start sm:static border-t dark:border-gray-700 px-5">
          <MenuItem
            active={active === "watchlist" ? true : false}
            onClick={() => setActive("watchlist")}
          >
            Watchlist
          </MenuItem>
          <MenuItem
            active={active === "browse" ? true : false}
            onClick={() => setActive("browse")}
          >
            Browse
          </MenuItem>
          <MenuItem
            active={active === "profile" ? true : false}
            onClick={() => setActive("profile")}
          >
            Profile
          </MenuItem>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
