import { useTranslation } from "react-i18next";

export default function AboutManagement() {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="container about-management">
        <img
          src="https://adasi-group.ru/UserFiles/Image/director.jpg"
          alt={t("aboutPage.managerName")}
        />
        <div>
          <p className="about-label">{t("aboutPage.managementLabel")}</p>
          <h2 className="title-medium">{t("aboutPage.managerName")}</h2>
          <p>{t("aboutPage.managerRole")}</p>
        </div>
      </div>
    </section>
  );
}
