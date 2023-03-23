import React, { useState } from "react";
import franceFlag from "../../../images/flags/france.png";
import usFlag from "../../../images/flags/united-states.png";
import CountryFlag from "./CountryFlag";
import "./Language.scss";
import { useTranslation } from "react-i18next";

function Language() {
  const [language, setLanguage] = useState("fr");
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(franceFlag);
  /**
   * Change la langue du pays au clique (drapeau, langue du site)
   */
  const changeLanguage = () => {
    if (selectedLanguage === franceFlag) {
      setSelectedLanguage(usFlag);
      setLanguage("us");
      i18n.changeLanguage("en");
    } else {
      setSelectedLanguage(franceFlag);
      setLanguage("fr");
      i18n.changeLanguage("fr");
    }
  };
  return (
    <button type="button" onClick={changeLanguage}>
      <CountryFlag flag={selectedLanguage} language={language} />
    </button>
  );
}

export default Language;
