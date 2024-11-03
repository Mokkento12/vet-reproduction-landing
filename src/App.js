import React from "react";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
