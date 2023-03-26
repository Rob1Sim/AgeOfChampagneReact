import React from "react";
import { useTranslation } from "react-i18next";

function Loading() {
  const { t } = useTranslation("loading");
  return <p>{t("loading-text")}</p>;
}

export default Loading;
