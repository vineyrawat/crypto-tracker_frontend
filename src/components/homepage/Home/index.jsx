import { BsArrowRightShort } from "react-icons/bs";
import React from "react";

function Home(props) {
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center gap-10">
      <h1 className="text-center text-7xl sm:text-8xl font-bold font-heading tracking-tighter">
        Track <span className="text-primary">crypto</span>
        <br />
        on the go
      </h1>
      <button className="text-white flex justify-center bg-primary items-center font-medium text-xl rounded-full py-2 px-5 hover:bg-opacity-90 focus:bg-primaryDark">
        <span>Get Started</span>
        <BsArrowRightShort size={40} />
      </button>
    </div>
  );
}

export default Home;
