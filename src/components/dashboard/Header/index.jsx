import React, { useState, useEffect } from "react";
import Logo from "../../homepage/Header/Logo";
import User from "./User";

const MenuItem = ({ children, active, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`h-full px-3 flex items-center transition-colors focus:outline-none cursor-pointer justify-center dark:text-gray-300 tracking-wider uppercase font-semibold border-b-2  ${
          active
            ? "border-primary bg-primary bg-opacity-10 text-primary dark:text-primary"
            : "border-transparent"
        }`}
      >
        {children}
      </button>
    </>
  );
};

function DashboardHeader({ user, setView, view, logOut }) {
  const [active, setActive] = useState(null);
  const width = window.innerWidth;

  useEffect(() => {
    setActive(view);
  }, [view]);

  return (
    <>
      <div className="bg-white sticky top-0 z-10 dark:bg-gray-800 shadow-sm">
        <div className="h-16 flex justify-between items-center mx-5">
          <Logo className="text-[20px]" />
          <User
            small={width < 530 ? true : false}
            title={user.name}
            subtitle={user.email}
            logOut={logOut}
          />
        </div>
        <div className="h-10 flex dark:bg-gray-800 bg-white sm:justify-start sm:static border-t dark:border-gray-700 px-5">
          <MenuItem
            onClick={() => setView("watchlist")}
            active={active === "watchlist" ? true : false}
          >
            Watchlist
          </MenuItem>
          <MenuItem
            onClick={() => setView("browse")}
            active={active === "browse" ? true : false}
          >
            Browse
          </MenuItem>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
