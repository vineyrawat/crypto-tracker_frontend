import React from "react";
import Contact from "../../components/homepage/Contact";
import HomePageHeader from "../../components/homepage/header";
import Home from "../../components/homepage/home";

function HomePage(props) {
  return (
    <div>
      <HomePageHeader />
      {/* <Home /> */}
      <Contact />
    </div>
  );
}

export default HomePage;
