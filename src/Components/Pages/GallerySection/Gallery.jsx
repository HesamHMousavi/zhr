import React from "react";
import Header from "../../Header/Header";
import GallerySection from "./GallerySection";
import Footer from "../../Footer/Footer";

const Gallery = () => {
  return (
    <div>
      <Header />
      <h2 className="gallery-title">GALLERY</h2>
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Gallery;
