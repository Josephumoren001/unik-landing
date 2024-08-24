import React from "react";
import { ScrollRestoration } from "react-router-dom";
import '../App.css';
import './waitlist.css';
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";

import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mldrobyq");
  
  if (state.succeeded) {
    return (
      <div className="success-message">
        <p>Thanks for joining!</p>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="formWrapper">
      <form onSubmit={handleSubmit} className="waitlist-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Type your full name"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email" 
            name="email"
            className="form-input"
            placeholder="Type your email address"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting} className="submit-button">
          Join Waitlist
        </button>
      </form>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
