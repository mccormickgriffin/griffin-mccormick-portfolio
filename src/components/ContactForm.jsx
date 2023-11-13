import React, { useState } from "react";
import "styles/ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setSenderEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const formData = {
        name,
        senderEmail,
        message,
      };
      const response = await fetch(
        process.env.REACT_APP_MAIL_SENDER_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // TODO: Successful submission logic
        console.log("Form submitted successfully!");
      } else {
        // TODO: Handle error cases
        console.error("Form submission failed.");
      }
    } catch (error) {
      // TODO: Handle error cases
      console.error("Error submitting form:", error);
    }
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
          <input
            type="email"
            value={senderEmail}
            onChange={handleEmailChange}
          />
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
