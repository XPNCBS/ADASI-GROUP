import type { IconType } from "react-icons";
import { FaBoxes, FaGlobe, FaWeightHanging } from "react-icons/fa";

import { aboutStats } from "./aboutData";

const statIcons: IconType[] = [FaGlobe, FaBoxes, FaWeightHanging];

export default function AboutStats() {
  return (
    <section className="about-stats" aria-label="Показатели ADASI Group">
      <div className="about-stats__inner">
        {aboutStats.map(([value, label], index) => {
          const Icon = statIcons[index];

          return (
            <div className="about-stat-card" key={label}>
              <Icon className="about-stat-card__icon" aria-hidden="true" />
              <span className="about-stat-card__label">{label}</span>
              <strong>{value}</strong>
            </div>
          );
        })}
      </div>
    </section>
  );
}