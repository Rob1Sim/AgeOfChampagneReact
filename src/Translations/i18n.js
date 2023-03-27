import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import navbar from "./navbar.json";
import card from "./card.json";
import loading from "./loading.json";
import cardlist from "./cardlist.json"

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        navbar: navbar.fr,
        card: card.fr,
        loading: loading.fr,
        cardlist: cardlist.fr,
      },
      en: {
        navbar: navbar.en,
        card: card.en,
        loading: loading.en,
        cardlist: cardlist.en,
      },
    },
    fallbackLng: "en",
    lng: "en",
  });
