import type { IconType } from "react-icons";
import { FaBoxes, FaGlobe, FaWeightHanging } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import { aboutStats } from "./aboutData";

const statIcons: IconType[] = [FaGlobe, FaBoxes, FaWeightHanging];

export default function AboutStats() {
  const { t } = useTranslation();

  return (
    <section className="about-stats" aria-label={t("aboutPage.statsLabel")}>
      <div className="about-stats__inner container">
        {aboutStats.map(([value], index) => {
          const Icon = statIcons[index];

          return (
            <div className="about-stat-card" key={value}>
              <Icon className="about-stat-card__icon" aria-hidden="true" />
              <span className="about-stat-card__label">
                {t(`aboutPage.stats.${index}`)}
              </span>
              <strong>{value}</strong>
            </div>
          );
        })}
      </div>
    </section>
  );
}
