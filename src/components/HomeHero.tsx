import { useState } from "react";
import Modal from "./shared/modal";
import Logo from "../assets/logo";
import { useTranslation } from "react-i18next";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "trade",
    title: "Торговля",
    description:
      "Разнообразный ассортимент товаров высокого качества со всего мира",
  },
  {
    id: "logistics",
    title: "Логистика",
    description:
      "Надежная доставка и управление цепочкой поставок по всем регионам",
  },
  {
    id: "consulting",
    title: "Консалтинг",
    description:
      "Профессиональные консультации и стратегические рекомендации для развития бизнеса",
  },
  {
    id: "education",
    title: "Образование",
    description:
      "Обучающие программы и повышение квалификации специалистов в различных сферах",
  },
];

export default function HomeHero() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const handleServiceClick = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleLogoClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="home-hero">
        <div className="home-hero__content">
          <div className="home-hero__header">
            <h1 className="home-hero__title">ADASI GROUP</h1>
          </div>

          <div className="home-hero__services-container">
            <button
              className={`home-hero__logo-button ${isExpanded ? "expanded" : ""}`}
              onClick={handleLogoClick}
              aria-label="Toggle services"
            >
              <div className="home-hero__logo-wrapper">
                <Logo size={1000} />
              </div>
              <span className="home-hero__logo-text">
                {isExpanded ? "Наши услуги" : "Нажмите"}
              </span>
            </button>

            {isExpanded && (
              <div className="home-hero__services-grid">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    className="home-hero__service-card"
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="home-hero__service-icon">
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="12,4 2.6,20 21.4,20"
                          fill="none"
                          stroke="#83B3A5"
                          stroke-width="3"
                          stroke-linejoin="miter"
                        />
                      </svg>
                    </div>
                    <h3 className="home-hero__service-title">
                      {service.title}
                    </h3>
                    <p className="home-hero__service-preview">
                      Узнать больше →
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Модалка для отображения деталей услуги */}
      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <div className="home-modal-content">
            <h2 className="home-modal-title">{selectedService.title}</h2>
            <p className="home-modal-description">
              {selectedService.description}
            </p>
            <div className="home-modal-footer">
              <a
                href={`/services?service=${selectedService.id}`}
                className="home-modal-link"
              >
                Перейти в услуги →
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
