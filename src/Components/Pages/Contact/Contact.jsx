import React from "react";
import Hero from "./Hero";
import Header from "../../Header/Header";
import Services from "./Services";
import Steps from "./Steps";
import ContactForm from "./ContactForm";
import FAQSection from "../../FAQs/FAQs";
import Footer from "../../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      {/* <Services /> */}
      <Steps />
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Contact;
