import { aboutLogistics, aboutLogisticsBenefits } from "./aboutData";
import { useTranslation } from "react-i18next";

export default function AboutLogistics() {
  const { t } = useTranslation();

  return (
    <section className="about-section about-logistics">
      <div className="container">
        <p className="about-label">{t("aboutPage.logisticsLabel")}</p>
        <h2 className="title-medium">{t("aboutPage.logisticsTitle")}</h2>
        <div className="about-route">
          {aboutLogistics.map((_, index) => (
            <div key={index}>
              <span>0{index + 1}</span>
              <strong>{t(`aboutPage.route.${index}`)}</strong>
              {index < aboutLogistics.length - 1 && <b>→</b>}
            </div>
          ))}
        </div>
        <div className="about-benefit-islands">
          {aboutLogisticsBenefits.map((_, index) => (
            <div className="about-benefit-island" key={index}>
              <span>0{index + 1}</span>
              <strong>{t(`aboutPage.logisticsBenefits.${index}`)}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
