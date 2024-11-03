import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h2>Связаться с нами</h2>
      <p>
        <FaPhone /> Телефон: +7 (123) 456-7890
      </p>
      <p>
        <FaEnvelope /> Email: contact@example.com
      </p>
      <p>
        <FaMapMarkerAlt /> Адрес: ул. Примерная, 123, Москва, Россия
      </p>
    </div>

    <div className="footer-social">
      <a href="#" aria-label="Facebook">
        Facebook
      </a>
      <a href="#" aria-label="Instagram">
        Instagram
      </a>
      <a href="#" aria-label="Twitter">
        Twitter
      </a>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Ваша компания. Все права защищены.</p>
    </div>
  </footer>
);

export default Footer;
