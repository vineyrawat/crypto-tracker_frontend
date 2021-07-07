import React, { lazy } from "react";
import HomePageHeader from "../../components/homepage/Header";
import Home from "../../components/homepage/Home";
const RegisterForm = lazy(() => import("../../components/homepage/Register"));
const LoginForm = lazy(() => import("../../components/homepage/Login"));

function HomePage(props) {
  const View = () => {
    if (props.view === "login") return <LoginForm />;
    if (props.view === "register") return <RegisterForm />;
    return <Home />;
  };
  return (
    <div>
      <HomePageHeader />
      <View />
    </div>
  );
}

export default HomePage;
