import { useState } from "react";

const languages = [
  { code: "ru", name: "Русский" },
  { code: "kk", name: "Қазақша" },
  { code: "en", name: "English" },
  { code: "uz", name: "O'zbekcha" },
  { code: "ms", name: "Melaya" },
];

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("ru");

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    // TODO: Implement language change logic
    console.log("Language switched to:", langCode);
  };

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
