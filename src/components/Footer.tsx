import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "./shared/modal";
import Logo from "../assets/logo";

export default function Footer() {
  const { t } = useTranslation();
  const [activeDocument, setActiveDocument] = useState<
    "privacy" | "terms" | null
  >(null);
  const [isSuggestionSent, setIsSuggestionSent] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-left">
              <div className="footer-brand">
                <Logo size={46} />
                <span>Adasi Group</span>
              </div>
              <div className="footer-documents">
                <h2 className="footer-documents-title">
                  {t("footer.documents")}
                </h2>
                <button
                  type="button"
                  className="footer-document-link"
                  onClick={() => setActiveDocument("privacy")}
                >
                  {t("footer.privacyPolicy")}
                </button>
                <button
                  type="button"
                  className="footer-document-link"
                  onClick={() => setActiveDocument("terms")}
                >
                  {t("footer.termsOfUse")}
                </button>
              </div>
            </div>
            <form
              className="footer-suggestion-form"
              onSubmit={(event) => {
                event.preventDefault();
                setIsSuggestionSent(true);
                event.currentTarget.reset();
              }}
            >
              <h2 className="footer-suggestion-title">
                {t("footer.suggestionTitle")}
              </h2>
              <input
                type="email"
                className="footer-suggestion-email"
                placeholder={t("footer.suggestionEmailPlaceholder")}
                aria-label={t("footer.suggestionEmailLabel")}
              />
              <textarea
                className="footer-suggestion-text"
                placeholder={t("footer.suggestionPlaceholder")}
                aria-label={t("footer.suggestionLabel")}
                required
                rows={3}
              />
              <button type="submit" className="footer-suggestion-button">
                {t("footer.suggestionButton")}
              </button>
              {isSuggestionSent && (
                <p className="footer-suggestion-success" role="status">
                  {t("footer.suggestionSuccess")}
                </p>
              )}
            </form>
          </div>
          <div className="footer-info">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
      <Modal
        isOpen={activeDocument !== null}
        onClose={() => setActiveDocument(null)}
      >
        <article className="footer-document-modal">
          <h2>
            {activeDocument === "privacy"
              ? t("footer.privacyPolicy")
              : t("footer.termsOfUse")}
          </h2>
          <p>
            {activeDocument === "privacy"
              ? t("footer.privacyText")
              : t("footer.termsText")}
          </p>
        </article>
      </Modal>
    </>
  );
}
