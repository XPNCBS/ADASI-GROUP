import { useTranslation } from "react-i18next";

export default function AboutMainInfo() {
  const { t } = useTranslation();

  return (
    <section
      className="about-info-block container"
      aria-labelledby="about-info-title"
    >
      <div className="about-info-block__image-wrap">
        <img
          className="about-info-block__image"
          src="/images/about-team.jpg"
          alt={t("aboutPage.teamImageAlt")}
          onError={(event) => {
            event.currentTarget.src = "/images/mainPageBg.webp";
          }}
        />
        <span className="about-info-block__caption">
          {t("aboutPage.teamCaption")}
        </span>
      </div>
      <div className="about-info-block__content">
        <p className="about-label">{t("aboutPage.label")}</p>
        <h2 id="about-info-title" className="title-large">
          {t("aboutPage.infoTitle")}
        </h2>
        <div className="about-info-block__copy">
          <p>{t("aboutPage.infoParagraph1")}</p>
          <p>{t("aboutPage.infoParagraph2")}</p>
        </div>
      </div>
    </section>
  );
}
