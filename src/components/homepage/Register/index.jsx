import React, { useState } from "react";
import Button from "../../global/Button";
import FormInput from "../../global/Form/FormInput";

function RegisterForm(props) {
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="flex flex-col items-center justify-center container max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-2xl font-heading font-medium mb-10">
        Create an account
      </h1>
      <form className="flex flex-col max-w-sm w-full" onSubmit={handleRegister}>
        <FormInput
          autoComplete="off"
          autoFocus
          placeholder="Full name"
          name="name"
          type="text"
        />
        <FormInput placeholder="Email address" name="email" type="email" />
        <FormInput placeholder="Password" name="password" type="password" />
        <div className="flex select-none mb-5">
          <input
            type="checkbox"
            name="license"
            id="checkbox"
            className="mr-2 cursor-pointer w-4 focus:outline-none"
          />
          <label htmlFor="checkbox" className="cursor-pointer">
            I agree with privacy policy and T&C
          </label>
        </div>
        <Button type="submit" isLoading={loading} isFullWidth>
          Create account
        </Button>
        <span className="mb-5" />
        <Button type="button" isFullWidth variant="gray">
          Login
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
