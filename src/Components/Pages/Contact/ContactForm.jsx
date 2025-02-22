import React, { useEffect, useRef, useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <div ref={formRef} className="contact-section">
      <h2
        className={`contact-title ${isVisible ? "animate-in" : "animate-out"}`}
      >
        Contact Form
      </h2>
      <form
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
        className={`contact-form ${isVisible ? "animate-in" : "animate-out"}`}
      >
        {/* Spam Prevention & Redirect */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://yourwebsite.com/thank-you"
        />

        <div className="input-group">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
          />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <div className="input-group">
          <select name="service_type" required>
            <option value="" disabled selected>
              Service Type*
            </option>
            <option>Acrylics</option>
            <option>Gel X</option>
            <option>Manicure</option>
          </select>
          <select name="nail_shape" required>
            <option value="" disabled selected>
              Nail Shape/Length*
            </option>
            <option>Short</option>
            <option>Medium</option>
            <option>Long</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Type your message here..."
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
