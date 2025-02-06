import React, { useEffect } from "react";
import Header from "../Header/Header";
import n1 from "../../Imgs/n1.jpeg";
import n2 from "../../Imgs/nails3.jpg";
import n3 from "../../Imgs/nails6.jpg";
import bottle from "../../Imgs/b2.png";
import Section from "./Section";
import Footer from "../Footer/Footer";
import "./Services.css";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      Img: n1,
      title: "",
    },
    {
      Img: n2,
      title: "",
    },
    {
      Img: n3,
      title: "",
    },
  ];
  return (
    <div>
      <Header />
      <div className="cream-bg">
        <div className="services max-width">
          <img src={n1} alt="" />
          <div className="polish-con">
            <div className="polish-top">
              <div className="polish-item">
                <img src={bottle} alt="" />
                <h2>Acrylic Nails</h2>
              </div>
              <div className="polish-item">
                <img src={bottle} alt="" />
                <h2>Gel Nails</h2>
              </div>
              <div className="polish-item">
                <img src={bottle} alt="" />
                <h2>Gel Nails</h2>
              </div>
            </div>
            <div className="polish-bottom">
              <div className="polish-item">
                <img src={bottle} alt="" />
                <h2>Acrylic Nails</h2>
              </div>
              <div className="polish-item">
                <img src={bottle} alt="" />
                <h2>Acrylic Nails</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section
        bg="var(--cream-light)"
        color="var(--text-color-header)"
        data={data}
      />
      <Section bg="var(--bg)" color="#fff" data={data} />
      <Section bg="var(--dusty-pink)" color="var(--primary-pink)" data={data} />
      <Section
        bg="var(--text-color-header)"
        color="var(--cream-light)"
        data={data}
      />
      <Footer />
    </div>
  );
};

export default Services;
