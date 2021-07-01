import React from "react";
import Form from "./form";
import ContactIllustration from "../../../assets/undraw_contact_us_15o2.svg";

function Contact(props) {
  return (
    <div className="flex flex-col container max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-heading mb-16">Contact Us</h1>
      <div className="flex">
        <Form />
        <div className="hidden md:block md:w-[50%]">
          <img src={ContactIllustration} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
