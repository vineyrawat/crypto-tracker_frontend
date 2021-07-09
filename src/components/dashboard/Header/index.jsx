import React, { useState, useEffect } from "react";
import Logo from "../../homepage/Header/Logo";
import User from "./User";
import { Link, useHistory } from "react-router-dom";

const MenuItem = ({ children, active, onClick, to }) => {
  return (
    <Link to={to}>
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
    </Link>
  );
};

function DashboardHeader(props) {
  const [active, setActive] = useState(null);
  const width = window.innerWidth;
  const { location } = useHistory();

  useEffect(() => {
    if (location.pathname === "/dashboard/browse") return setActive("browse");
    if (location.pathname === "/dashboard/profile") return setActive("profile");
    if (location.pathname === "/dashboard") return setActive("watchlist");
  }, [location.pathname]);

  return (
    <>
      <div className="bg-white sticky top-0 z-10 dark:bg-gray-800 shadow-sm">
        <div className="h-16 flex justify-between items-center mx-5">
          <Logo className="text-[20px]" />
          <User
            small={width < 530 ? true : false}
            title="Vinay Rawat"
            subtitle="vineyrawat@yahoo.com"
          />
        </div>
        <div className="h-10 flex dark:bg-gray-800 bg-white sm:justify-start sm:static border-t dark:border-gray-700 px-5">
          <MenuItem
            to="/dashboard"
            active={active === "watchlist" ? true : false}
          >
            Watchlist
          </MenuItem>
          <MenuItem
            to="/dashboard/browse"
            active={active === "browse" ? true : false}
          >
            Browse
          </MenuItem>
          <MenuItem
            to="/dashboard/profile"
            active={active === "profile" ? true : false}
          >
            Profile
          </MenuItem>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
