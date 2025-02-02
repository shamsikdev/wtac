import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../public/locales/en.json";
import ruTranslation from "../public/locales/ru.json";
const selectedLanguage = localStorage.getItem("i18nextLng") || "ru";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: selectedLanguage,
    debug: true,
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
  });

export default i18n;
