import React from "react";
import "./AboutSection.css";

const AboutSection = () => (
  <section className="about">
    <div className="about-container">
      {" "}
      {/* Добавляем контейнер */}
      <h2>О нас</h2>
      <div className="about-content">
        <p>
          Наше отделение репродуктологии специализируется на индивидуальном
          подходе и использовании современного оборудования для здоровья ваших
          питомцев. Мы стремимся обеспечивать наилучшие результаты и заботу.
        </p>

        <div className="about-highlights">
          <div className="highlight-item">
            <img src="/images/experts.jpg" alt="Опытные специалисты" />
            <h3>Опытные специалисты</h3>
            <p>
              Наши ветеринарные врачи имеют многолетний опыт и квалификацию в
              области репродуктологии.
            </p>
          </div>

          <div className="highlight-item">
            <img src="/images/equipment.jpg" alt="Современное оборудование" />
            <h3>Современное оборудование</h3>
            <p>
              Мы используем новейшие технологии и оборудование для диагностики и
              лечения.
            </p>
          </div>

          <div className="highlight-item">
            <img
              src="/images/personal-approach.jpg"
              alt="Индивидуальный подход"
            />
            <h3>Индивидуальный подход</h3>
            <p>
              Каждому питомцу уделяется индивидуальное внимание, чтобы
              обеспечить его здоровье и комфорт.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
