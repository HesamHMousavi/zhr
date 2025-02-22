import React from "react";
import Header from "../../Header/Header";
import ImagePreview from "./ImagePreview";
import ImageGrid from "./ImageGrid";
import Featured from "./Featured";
import AboutSection from "../../About/About";
import BookConsultation from "./BookConsultation";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <ImagePreview />
      <ImageGrid />
      <Featured />
      <AboutSection />
      <BookConsultation />
      <Footer />
    </div>
  );
};

export default Home;
