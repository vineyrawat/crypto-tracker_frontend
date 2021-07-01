import React, { useState } from "react";
import Button from "../../global/Button";
import Alert from "../../global/Alert";
import FormInput from "../../global/Form/FormInput";
import TextArea from "../../global/Form/TextArea";

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
          hidden
          title="This is title"
          variant="success"
          message="This is desctioption sometimes it is very very long : )"
        />
        <div className="grid sm:grid-cols-2 sm:gap-4">
          <FormInput name="name" id="name" placeholder="Name" />
          <FormInput name="email" id="email" placeholder="Email address" />
        </div>
        <FormInput name="subject" id="subject" placeholder="Subject" />
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
