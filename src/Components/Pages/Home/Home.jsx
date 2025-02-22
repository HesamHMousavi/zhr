import React from "react";
import Header from "../../Header/Header";
import ImagePreview from "./ImagePreview";
import ImageGrid from "./ImageGrid";
import Featured from "./Featured";
import BookConsultation from "./BookConsultation";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <ImagePreview />
      <ImageGrid />
      <Featured />
      <BookConsultation />
      <Footer />
    </div>
  );
};

export default Home;
