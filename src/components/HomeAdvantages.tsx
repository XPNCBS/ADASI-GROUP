import { FaRocket } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ADVANTAGES = [
  "partnership",
  "support",
  "reliability",
  "guidance",
  "innovation",
  "network",
] as const;

export default function HomeAdvantages() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="home-advantages" aria-labelledby="advantages-title">
      <div className="home-advantages__inner">
        <span className="home-advantages__eyebrow">
          {t("advantages.eyebrow")}
        </span>
        <h2 id="advantages-title" className="home-advantages__title">
          {t("advantages.title")}
        </h2>

        <div
          className={`home-advantages__grid ${isExpanded ? "is-expanded" : ""}`}
        >
          {ADVANTAGES.map((advantage) => (
            <article className="home-advantages__item" key={advantage}>
              <div className="home-advantages__icon" aria-hidden="true">
                <FaRocket />
              </div>
              <div>
                <h3 className="home-advantages__item-title">
                  {t(`advantages.items.${advantage}.title`)}
                </h3>
                <p className="home-advantages__description">
                  {t(`advantages.items.${advantage}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <button
          className="home-advantages__toggle"
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          {t(isExpanded ? "advantages.showLess" : "advantages.showMore")}
        </button>
      </div>
    </section>
  );
}