import React from "react";
import "./Error.scss";
import { useTranslation } from "react-i18next";
import lost from "../../images/lost.svg";

function Error() {
  const { t } = useTranslation("error");
  return (
    <div className="error">
      <h1>404</h1>
      <h2>{t("error-message")}</h2>
      <img src={lost} alt={t("alt-img")} />
    </div>
  );
}

export default Error;
