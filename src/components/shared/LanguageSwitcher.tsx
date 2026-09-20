import { useEffect, useState } from "react";
import i18n from "../../i18n/i18n";

const languages = [
  { code: "ru", name: "Русский" },
  { code: "kk", name: "Қазақша" },
  { code: "en", name: "English" },
  { code: "uz", name: "O'zbekcha" },
  { code: "ms", name: "Bahasa Melayu" },
];

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("ru");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    void i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div className="language-switcher">
        <button
          type="button"
          className="language-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-language-options"
          onClick={() => setIsOpen((open) => !open)}
        >
          {currentLang.toUpperCase()}
          <span aria-hidden="true">⌄</span>
        </button>
        {isOpen && (
          <div id="mobile-language-options" className="language-options">
            {languages.map((lang) => (
              <button
                type="button"
                className="language-option"
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="language-switcher">
      <select
        value={currentLang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="language-select"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
