import React from "react";
import Header from "./components/Header/Header";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TeamSection from "./components/TeamSection/TeamSection";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
