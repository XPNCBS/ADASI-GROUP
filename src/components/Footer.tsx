import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
