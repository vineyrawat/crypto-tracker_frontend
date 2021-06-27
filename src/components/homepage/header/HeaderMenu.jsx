import React from "react";

const MenuItem = ({ children }) => {
  return (
    <>
      <a href="#">
        <li className="cursor-pointer text-xl px-3 sm:px-3 py-2">{children}</li>
      </a>
    </>
  );
};

function HeaderMenu(props) {
  return (
    <>
      <ul className="flex right-5 justify-around sm:justify-center w-full sm:w-auto border sm:border-0 mt-5 sm:mt-0">
        <MenuItem>Contact</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Login</MenuItem>
        <MenuItem>Register</MenuItem>
      </ul>
    </>
  );
}

export default HeaderMenu;
