import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import error from "./error.json";
import navbar from "./navbar.json";
import card from "./card.json";
import loading from "./loading.json";
import cardlist from "./cardList.json";
import animation from "./animation.json";
import vigneronslist from "./vigneronsList.json";
import vigneron from "./vigneron.json";
import animationslist from "./animationsList.json";
<<<<<<< src/Translations/i18n.js
import editProfile from "./editProfile.json";
import profile from "./profile.json";
=======
import footer from "./footer.json";
>>>>>>> src/Translations/i18n.js

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
        animation: animation.fr,
        error: error.fr,
        vigneronslist: vigneronslist.fr,
        vigneron: vigneron.fr,
        animationslist: animationslist.fr,
        editProfile: editProfile.fr,
        profile: profile.fr,
        footer: footer.fr,
      },
      en: {
        navbar: navbar.en,
        card: card.en,
        loading: loading.en,
        animation: animation.en,
        cardlist: cardlist.en,
        error: error.en,
        vigneronslist: vigneronslist.en,
        vigneron: vigneron.en,
        animationslist: animationslist.en,
        editProfile: editProfile.en,
        profile: profile.en,
        footer: footer.en,
      },
    },
    fallbackLng: "en",
    lng: "en",
  });
