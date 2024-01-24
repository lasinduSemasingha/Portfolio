import React, { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8bvvusc", "template_bvjsnb2", formRef.current, "CECXBHC_Lr3bDD3q-")
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  const handleButtonClick = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="contact">
      <div className="textContainer">
        <h1>
          <strong>Let's Work</strong> together
        </h1>
        <div className="item">
          <h2>Mail</h2>
          <span>lasindusemasingha@gmail.com</span>
          <h2>Address</h2>
          <span>No.45, 5th cross street, Colombo</span>
          <h2>Phone</h2>
          <span>+94-72-467-9291</span>
        </div>
        <a href="#form1" onClick={handleButtonClick}>
          {showForm ? "Hide Contact" : "Contact Me"}
        </a>
      </div>
      {showForm && (
        <div className="formContainer">
          <form id="form1" ref={formRef} onSubmit={sendEmail}>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea required rows={8} placeholder="Message" name="message" />
            <button type="submit">Submit</button>
            <p>
              <strong>{error && "Error"}</strong>
            </p>
            <p>
              <strong>{success && "Success"}</strong>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
