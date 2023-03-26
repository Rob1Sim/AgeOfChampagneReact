import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import navbar from "./navbar.json";
import card from "./card.json";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        navbar: navbar.fr,
        card: card.fr,
      },
      en: {
        navbar: navbar.en,
        card: card.en,
      },
    },
    fallbackLng: "en",
    lng: "en",
  });
