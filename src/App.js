import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import Gallery from "./Components/Pages/GallerySection/Gallery";
import PressPage from "./Components/Pages/Press/PressPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/press-ons" element={<PressPage />} />
      </Routes>
    </Router>
  );
}

export default App;
