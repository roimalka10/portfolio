import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact-text" id="contact">
        <div className="h2-text">
          <h2>Contact</h2>
        </div>
        <div className="p-text">
          <p>Have a question or want to work together?</p>
        </div>
      </div>
      <div className="form-container" id="contact-form">
        <form
          action="https://formspree.io/f/mpzkdonw"
          target="_blank"
          method="POST"
        >
          <label for="Name">Name</label>
          <div className="form-padding">
            <input
              className="inputs"
              type="text"
              name="name"
              id="name"
              required
            />
            <span class="bottom"></span>
            <span class="right"></span>
            <span class="top"></span>
            <span class="left"></span>
          </div>
          <label for="email">Email</label>
          <div class="form-padding">
            <input
              className="inputs"
              type="email"
              name="email"
              id="email"
              required
            />
            <span class="bottom"></span>
            <span class="right"></span>
            <span class="top"></span>
            <span class="left"></span>
          </div>

          <label for="message">Message</label>
          <div class="form-padding">
            <textarea className="inputs" name="message" id="message"></textarea>
            <span class="bottom"></span>
            <span class="right"></span>
            <span class="top"></span>
            <span class="left"></span>
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </>
  );
};

export default Contact;
