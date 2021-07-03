import React, { useState } from "react";
import Button from "../../global/Button";
import FormInput from "../../global/Form/FormInput";

function ForgetPassword(props) {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="flex flex-col items-center justify-center container max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-2xl font-heading font-medium mb-10">
        Forget password
      </h1>
      <form className="flex flex-col max-w-sm w-full" onSubmit={handleLogin}>
        <FormInput
          autoComplete="off"
          autoFocus
          placeholder="Email address"
          name="email"
          type="email"
        />
        <Button type="submit" isLoading={loading} isFullWidth>
          Continue
        </Button>
        <span className="mb-5" />
        <Button type="button" isFullWidth variant="gray">
          Login
        </Button>
      </form>
    </div>
  );
}

export default ForgetPassword;
