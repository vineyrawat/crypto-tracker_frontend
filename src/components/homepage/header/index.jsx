import React from "react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function HomePageHeader(props) {
  return (
    <header className="pt-5">
      <div className="flex justify-between items-center flex-col sm:flex-row container max-w-7xl mx-auto px-4 h-full">
        <Logo />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default HomePageHeader;
