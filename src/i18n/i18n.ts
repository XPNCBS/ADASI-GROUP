import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./ru.json";
import en from "./en.json";
import kk from "./kk.json";
import ms from "./ms.json";
import uz from "./uz.json";
import { pageTranslations } from "./pageTranslations";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        ...ru,
        ...pageTranslations.ru,
        home: { ...ru.home, ...pageTranslations.ru.home },
      },
    },
    en: {
      translation: {
        ...en,
        ...pageTranslations.en,
        home: { ...en.home, ...pageTranslations.en.home },
      },
    },
    kk: { translation: kk },
    ms: { translation: ms },
    uz: { translation: uz },
  },
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
