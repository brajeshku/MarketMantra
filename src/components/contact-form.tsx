"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          Phone / WhatsApp
          <input
            name="phone"
            type="tel"
            placeholder="+91"
            autoComplete="tel"
            required
          />
        </label>
        <label>
          City
          <input
            name="city"
            placeholder="Your city"
            autoComplete="address-level2"
          />
        </label>
        <label>
          Interested in
          <select name="course" defaultValue="">
            <option value="" disabled>
              Select a course
            </option>
            <option>Fundamental &amp; Technical Insights</option>
            <option>Complete Guide to Stock Market</option>
            <option>Advanced Equity, Commodity &amp; Forex</option>
            <option>All three courses</option>
          </select>
        </label>
      </div>
      <Button type="submit" size="lg" className="form-submit">
        Request a call back <ArrowRight size={16} />
      </Button>
      <p className="form-note">
        Demo form only — your details are not sent or stored.
      </p>
      {submitted ? (
        <p className="form-success" role="status">
          <Check size={16} /> Form preview submitted. Connect a backend to
          receive enquiries.
        </p>
      ) : null}
    </form>
  );
}
