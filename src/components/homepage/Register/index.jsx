import React, { useState } from "react";
import Button from "../../global/Button";
import * as auth from "../../../services/api/Auth";
import { Link } from "react-router-dom";
import FormInput from "../../global/Form/FormInput";
import Alert from "../../global/Alert";

function RegisterForm(props) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (name.length === 0) {
      setLoading(false);
      return setStatus({ type: "warning", title: "Name is required" });
    }
    if (name.length < 3) {
      setLoading(false);
      return setStatus({
        type: "warning",
        message: "Name must be more than 3 digits",
      });
    }
    if (email.length === 0) {
      setLoading(false);
      return setStatus({ type: "warning", title: "Email is required" });
    }
    if (password.length === 0) {
      setLoading(false);
      return setStatus({ type: "warning", title: "Password is required" });
    }
    if (password.length < 8) {
      setLoading(false);
      return setStatus({
        type: "warning",
        message: "Password must be more than 8 digits",
      });
    }
    const [data, error] = await auth.register(name, email, password);
    if (error) {
      setStatus({
        type: "danger",
        title: "An error has occured",
        message: error.message,
      });
      return setLoading(false);
    }
    // console.log(data.data);
    if (data.data.status === "failure") {
      setLoading(false);
      return setStatus({
        type: "danger",
        title: data.data.error,
      });
    }
    setLoading(false);
    localStorage.setItem("token", data.data.token);
    setStatus({ type: "success", title: "Register success" });
    window.location = "/dashboard";
  };

  return (
    <div className="flex flex-col items-center justify-center container max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-2xl font-heading font-medium mb-10">
        Create an account
      </h1>
      <form className="flex flex-col max-w-sm w-full" onSubmit={handleRegister}>
        {status && (
          <Alert
            className="mb-3"
            title={status.title}
            message={status.message}
            type={status.type}
          />
        )}
        <FormInput
          autoComplete="off"
          autoFocus
          placeholder="Full name"
          name="name"
          type="text"
        />
        <FormInput placeholder="Email address" name="email" type="email" />
        <FormInput placeholder="Password" name="password" type="password" />
        <Button type="submit" isLoading={loading} isFullWidth>
          Create account
        </Button>
        <span className="mb-5" />
        <Link to="/login">
          <Button type="button" isFullWidth variant="gray">
            Login
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default RegisterForm;
