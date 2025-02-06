import React, { useEffect } from "react";
import Header from "../Header/Header";
import ImgGrid from "../Contact/ImgGrid";
import SocialBanner from "../Contact/SocialBanner";
import ContactForm from "../Contact/ContactForm";
import Footer from "../Footer/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <ImgGrid />
      <SocialBanner />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
