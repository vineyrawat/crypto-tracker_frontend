import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center gap-10">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="text-center text-7xl sm:text-8xl font-black tracking-tighter"
      >
        Track <span className="text-primary">crypto</span>
        <br />
        on the go
      </motion.h1>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
        className="text-white flex justify-center bg-primary items-center font-medium text-xl rounded-full py-2 px-5 hover:bg-opacity-90 focus:bg-primaryDark"
      >
        <span>Get Started</span>
        <BsArrowRightShort size={40} />
      </motion.button>
    </div>
  );
}

export default Home;
