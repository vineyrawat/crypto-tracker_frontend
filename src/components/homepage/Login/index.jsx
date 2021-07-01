import React, { useState } from "react";
import Alert from "../../global/Alert";
import Button from "../../global/Button";
import FormInput from "../../global/Form/FormInput";

function LoginForm(props) {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="flex flex-col items-center justify-center container max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-2xl font-heading font-medium mb-10">
        Login to continue
      </h1>
      <form className="flex flex-col max-w-sm w-full" onSubmit={handleLogin}>
        <Alert
          variant="info"
          title="This is title"
          message="This is my message and this is really really long."
        />
        <FormInput
          autoComplete="off"
          autoFocus
          placeholder="Email address"
          name="email"
          type="email"
        />
        <FormInput placeholder="Password" name="password" type="password" />
        <div className="flex select-none mb-5">
          <input
            type="checkbox"
            name="save-password"
            id="checkbox"
            className="mr-2 cursor-pointer w-4 focus:outline-none"
          />
          <label htmlFor="checkbox" className="cursor-pointer">
            Save this device
          </label>
        </div>
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
