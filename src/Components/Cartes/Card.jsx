import React, { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { useTranslation } from "react-i18next";
import { fetchCard, getCardImage } from "../../services/api/card";

function Card() {
  const [, { cardId }] = useRoute("/cartes/:cardId");
  const { t } = useTranslation("card");
  const [card, setCard] = useState();
  const [, setLocation] = useLocation();

  useEffect(() => {
    setCard(undefined);
    if (Number.isInteger(parseInt(cardId, 10))) {
      fetchCard(cardId).then((response) => {
        if (response === null) {
          setLocation("/cartes");
        }
        setCard(response);
      });
    }
  }, [cardId]);

  return (
    <div>
      <img src={getCardImage(cardId)} alt={t("alt-card")} />
      {card.name}
    </div>
  );
}

export default Card;
