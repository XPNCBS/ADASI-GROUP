import { useTranslation } from "react-i18next";

export default function NewsFooter() {
  const { t } = useTranslation();
  return (
    <footer className="news-footer">
      <div className="news-footer-grid">
        <div>
          <h3 className="news-footer-title">{t("footer.subscribeTitle")}</h3>
          <p className="news-footer-description">
            {t("footer.subscribeDescription")}
          </p>
        </div>

        <form
          className="news-footer-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="news-footer-label" htmlFor="news-footer-email">
            {t("footer.emailLabel")}
          </label>
          <div className="news-footer-form-row">
            <input
              id="news-footer-email"
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="news-footer-input"
              required
            />
            <button type="submit" className="news-footer-button">
              {t("footer.subscribeButton")}
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}
