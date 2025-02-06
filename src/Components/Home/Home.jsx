import React,{useEffect} from "react";
import Header from "../Header/Header";
import LandImg from "../Home/LandImg";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <div>
      <Header />
      <LandImg />
      <HeroLeft />
      <HeroRight />
      <Featured />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
