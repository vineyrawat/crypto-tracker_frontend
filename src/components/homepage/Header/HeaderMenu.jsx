import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ children, to }) => {
  return (
    <>
      <Link to={to}>
        <li className="cursor-pointer text-lg sm:text-xl px-3 sm:px-3 py-2">
          {children}
        </li>
      </Link>
    </>
  );
};

function HeaderMenu(props) {
  return (
    <>
      <ul className="flex right-5 justify-around sm:justify-center w-full sm:w-auto border border-gray-500 sm:border-0 mt-5 sm:mt-0">
        {/* <MenuItem to="#">Contact</MenuItem> */}
        <MenuItem to="/dashboard">Dashboard</MenuItem>
        <MenuItem to="#">FAQ</MenuItem>
        <MenuItem to="/login">Login</MenuItem>
        <MenuItem to="/register">Register</MenuItem>
      </ul>
    </>
  );
}

export default HeaderMenu;
