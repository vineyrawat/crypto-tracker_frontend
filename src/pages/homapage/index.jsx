import React from "react";
import LoginForm from "../../components/homepage/Login";
import HomePageHeader from "../../components/homepage/Header";

function HomePage(props) {
  return (
    <div>
      <HomePageHeader />
      <LoginForm />
    </div>
  );
}

export default HomePage;
