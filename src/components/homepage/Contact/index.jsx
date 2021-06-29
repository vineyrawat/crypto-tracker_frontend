import React, { useState } from "react";
import Button from "../../global/Button";
import ContactIllustration from "../../../assets/undraw_contact_us_15o2.svg";

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

function Contact(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="flex flex-col container max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-heading mb-16">Contact Us</h1>
      <div className="flex justify-between">
        <form className="flex md:w-[45%] flex-col" onSubmit={handleSubmit}>
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
        <div className="hidden md:block md:w-[50%]">
          <img src={ContactIllustration} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
