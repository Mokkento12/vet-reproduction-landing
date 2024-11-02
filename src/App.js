import React from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;
