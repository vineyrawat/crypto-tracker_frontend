import React from "react";
// import Contact from "../../components/homepage/Contact";
import HomePageHeader from "../../components/homepage/header";
// import Home from '../../components/homepage/home'
import Login from "../../components/homepage/Login";

function HomePage(props) {
  return (
    <div>
      <HomePageHeader />
      <Login />
    </div>
  );
}

export default HomePage;
