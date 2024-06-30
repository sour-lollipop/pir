import React, { useState } from "react";

const Services: React.FC = () => {
  const [activeCards, setActiveCards] = useState<number[]>([]);

  const handleCardClick = (id: number) => {
    setActiveCards((prev) => [...prev, id]);
  };

  return (
    <div className="services" id="services">
      {/* <h1>Наши услуги:</h1> */}
      <div className="container">
        {services.map((service) => (<>
          {service.id === 1 && (
            <div className="label">Наши услуги</div>
          )}
          <div
            key={service.id}
            className={`card ${
              activeCards.includes(service.id) ? "active" : ""
            }`}
            onClick={() => handleCardClick(service.id)}
          >
            {activeCards.includes(service.id)
              ? service.description
              : service.name}
          </div></>
        ))}
      </div>
    </div>
  );
};

export default Services;

const services = [
  {
    id: 1,
    name: "AutoSignPro",
    description:
      "Инновационное решение для автоматизации подписания электронных документов на государственных порталах.",
  },
  {
    id: 2,
    name: "Разработка телеграмм-ботов",
    description:
      "Создание ботов для автоматизации общения с клиентами, обработки заказов и проведения опросов.",
  },
  {
    id: 3,
    name: "Создание веб-сайтов",
    description:
      "Разработка лендингов, корпоративных сайтов и интернет-магазинов, интеграция с внешними системами.",
  },
  {
    id: 4,
    name: "Автоматизация бизнес-процессов",
    description: "Индивидуальные решения для управления, учета и планирования.",
  },
];
