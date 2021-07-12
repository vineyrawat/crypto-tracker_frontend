import React, { useState } from "react";
import Button from "../../global/Button";
import FormInput from "../../global/Form/FormInput";
import * as auth from "../../../services/api/Auth";
import Alert from "../../global/Alert";

function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email.length === 0) {
      setLoading(false);
      return setStatus({ type: "warning", title: "Email is required" });
    }
    if (password.length === 0) {
      setLoading(false);
      return setStatus({ type: "warning", title: "Password is required" });
    }
    const [data, error] = await auth.login(email, password);
    if (error) {
      setLoading(false);
      return setStatus({
        type: "danger",
        title: "Invalid email or password",
        message:
          "Entered email and password are invalid. Please provide correct email and password",
      });
    }
    setStatus({ type: "success", title: "Login success" });
    setLoading(null);
    localStorage.setItem("token", data.data.token);
    window.location = "/dashboard";
  };

  return (
    <div className="flex flex-col items-center justify-center container max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-2xl font-heading font-medium mb-10">
        Login to continue
      </h1>
      <form className="flex flex-col max-w-sm w-full" onSubmit={handleLogin}>
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
          placeholder="Email address"
          name="email"
          type="email"
        />
        <FormInput placeholder="Password" name="password" type="password" />
        <Button type="submit" isLoading={loading} isFullWidth>
          Login
        </Button>
        <span className="mb-5" />
        <Button type="button" isFullWidth variant="gray">
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
