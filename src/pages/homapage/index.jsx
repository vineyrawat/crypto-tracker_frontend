import React from "react";
import HomePageHeader from "../../components/homepage/header";
import RegisterForm from "../../components/homepage/Register";
// import Contact from "../../components/homepage/Contact";
// import Home from '../../components/homepage/home'
// import Login from "../../components/homepage/Login";

function HomePage(props) {
  return (
    <div>
      <HomePageHeader />
      <RegisterForm />
    </div>
  );
}

export default HomePage;
