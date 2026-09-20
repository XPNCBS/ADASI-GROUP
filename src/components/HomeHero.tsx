import { useState } from "react";
import Modal from "./shared/modal";
import Logo from "../assets/logo";
import { useTranslation } from "react-i18next";

interface ServiceItem {
  id: string;
}

const SERVICES: ServiceItem[] = [
  { id: "trade" },
  { id: "logistics" },
  { id: "consulting" },
  { id: "education" },
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
            <h1 className="home-hero__title">ВАШ ПУТЕВОДИТЕЛЬ ПО БИЗНЕСУ</h1>
          </div>

          <div className="home-hero__services-container">
            <button
              className={`home-hero__logo-button ${isExpanded ? "expanded" : ""}`}
              onClick={handleLogoClick}
              aria-label={t("home.toggleServices")}
            >
              <div className="home-hero__logo-wrapper">
                <Logo size={1000} />
              </div>

              <span className="home-hero__logo-text">
                <span
                  className={`home-hero__logo-text-item ${
                    !isExpanded ? "is-visible" : ""
                  }`}
                >
                  {t("home.click")}
                </span>

                <span
                  className={`home-hero__logo-text-item ${
                    isExpanded ? "is-visible" : ""
                  }`}
                >
                  {t("home.ourServices")}
                </span>
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
                      {t(`home.services.${service.id}.label`)}
                    </h3>
                    <p className="home-hero__service-preview">
                      {t("home.learnMore")}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <div className="home-modal-content">
            <h2 className="home-modal-title">
              {t(`home.services.${selectedService.id}.title`)}
            </h2>
            <p className="home-modal-description">
              {t(`home.services.${selectedService.id}.description`)}
            </p>
            <div className="home-modal-footer">
              <a
                href={`/services?service=${selectedService.id}`}
                className="home-modal-link"
              >
                {t("home.goToServices")}
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
