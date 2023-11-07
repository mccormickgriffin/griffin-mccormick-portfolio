import React, { useState } from "react";
import "styles/ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-input-container">
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div className="form-input-container">
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div className="form-input-container">
        <label>
          Message:
          <textarea rows={8} value={message} onChange={handleMessageChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
