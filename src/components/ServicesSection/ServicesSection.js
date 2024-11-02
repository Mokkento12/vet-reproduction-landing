import React from "react";
import { FaStethoscope, FaSyringe, FaPaw } from "react-icons/fa";
import "./ServicesSection.css";

const ServicesSection = () => (
  <section className="services">
    <div className="services-container">
      {" "}
      {/* Добавляем контейнер */}
      <h2>Наши услуги</h2>
      <ul>
        <li>
          <FaStethoscope className="service-icon" />
          Консультации по вопросам репродукции
        </li>
        <li>
          <FaSyringe className="service-icon" />
          Диагностика и лечение заболеваний
        </li>
        <li>
          <FaPaw className="service-icon" />
          Подготовка и сопровождение к размножению
        </li>
      </ul>
    </div>
  </section>
);

export default ServicesSection;
