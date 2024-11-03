import React from "react";
import "./TeamSection.css";

const TeamSection = () => (
  <section className="team">
    <h2>Наша команда</h2>
    <div className="team-grid">
      <div className="team-member">
        <img src="/images/doctors/doc-1.jpg" alt="Доктор Иванов" />
        <h3>Доктор Иван Иванов</h3>
        <p>Специалист по репродуктологии</p>
        <p>Опыт: 10 лет</p>
        <button className="more-info-btn">Подробнее</button>
      </div>

      <div className="team-member">
        <img src="/images/doctors/doc-3.jpg" alt="Доктор Иванов" />
        <h3>Доктор Анна Петрова</h3>
        <p>Ветеринарный терапевт</p>
        <p>Опыт: 8 лет</p>
        <button className="more-info-btn">Подробнее</button>
      </div>

      <div className="team-member">
        <img src="/images/doctors/doc-2.jpg" alt="Доктор Иванов" />
        <h3>Доктор Алексей Сидоров</h3>
        <p>Специалист по хирургии</p>
        <p>Опыт: 12 лет</p>
        <button className="more-info-btn">Подробнее</button>
      </div>
    </div>
  </section>
);

export default TeamSection;
