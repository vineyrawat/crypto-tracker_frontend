import React, { useState } from "react";
import Button from "../../global/Button";
import Alert from "../../global/Alert";

const Input = ({ placeholder, name, id, onChange, type }) => {
  return (
    <>
      <input
        className="w-full bg-gray-50 p-2 px-3 text-lg mb-5 border-2 focus:outline-none   focus:border-primary focus:bg-transparent text-gray-600"
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

const TextArea = ({ placeholder, name, id, onChange }) => {
  return (
    <>
      <textarea
        className="w-full bg-gray-50 p-2 px-3 text-lg mb-5 border-2 focus:outline-none   focus:border-primary focus:bg-transparent text-gray-600"
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

function Form() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <form
        className="flex w-full md:w-[50%] md:pr-10 flex-col"
        onSubmit={handleSubmit}
      >
        <Alert
          title="This is title"
          variant="success"
          message="This is desctioption sometimes it is very very long : )"
        />
        <div className="grid sm:grid-cols-2 sm:gap-4">
          <Input name="name" id="name" placeholder="Name" />
          <Input name="email" id="email" placeholder="Email address" />
        </div>
        <Input name="subject" id="subject" placeholder="Subject" />
        <TextArea placeholder="Message" />
        <Button
          isFullWidth
          isLoading={loading}
          onClick={() => setLoading(!loading)}
        >
          Send Message
        </Button>
      </form>
    </>
  );
}

export default Form;
