import { aboutCertificates, aboutMaterials } from "./aboutData";
import { useTranslation } from "react-i18next";

export default function AboutCertificates() {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="container about-columns">
        <div>
          <p className="about-label">{t("aboutPage.qualityLabel")}</p>
          <h2 className="title-medium">{t("aboutPage.qualityTitle")}</h2>
          <p className="about-motivation">{t("aboutPage.qualityText")}</p>
          <div className="about-certificate-islands">
            {aboutCertificates.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="about-materials-island">
          <h3 className="title-small">{t("aboutPage.materialsTitle")}</h3>
          <div className="about-material-links">
            {aboutMaterials.map((_, index) => (
              <a href="/contacts" key={index}>
                <span className="about-pdf-icon">pdf</span>
                <span>{t(`aboutPage.materials.${index}`)}</span>
                <b aria-hidden="true">→</b>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
