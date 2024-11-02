import React from "react";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;
