import React, { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { useTranslation } from "react-i18next";
import {
  fetchCard,
  fetchCruFromCard,
  getCardImage,
} from "../../services/api/card";
import Loading from "../Loading";
import Map from "./Map";
import "./Card.scss";

function Card() {
  const [, { cardId }] = useRoute("/cartes/:cardId");
  const { t } = useTranslation("card");
  const [card, setCard] = useState();
  const [, setLocation] = useLocation();
  const [cru, setCru] = useState();
  useEffect(() => {
    setCard(undefined);
    setCru(undefined);
    if (Number.isInteger(parseInt(cardId, 10))) {
      fetchCard(cardId).then((response) => {
        if (response === null) {
          setLocation("/cartes");
        }
        setCard(response);
        // Récupération du cru à partir de la relation
        fetchCruFromCard(response.cru_r).then((cruResponse) => {
          if (cruResponse === null) {
            setCru(undefined);
          }
          setCru(cruResponse);
        });
      });
    }
  }, [cardId]);

  return (
    <div>
      {card === undefined ? (
        <Loading />
      ) : (
        <div>
          <img src={getCardImage(cardId)} alt={t("alt-card")} />
          {card.nom}
          {card.type}
          {card.region}
          <Map lat={10} long={10} />
          {cru === undefined ? (
            <p>Pas de cru pour cette carte</p>
          ) : (
            <div>
              {cru.libelle}
              {cru.infos}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
