import React, { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { useTranslation } from "react-i18next";
import {
  fetchCard,
  fetchCruFromCard,
  cardImgUrl,
} from "../../services/api/cards";
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
      {card === undefined || cru === undefined ? (
        <Loading />
      ) : (
        <main>
          <section>
            <img src={cardImgUrl(cardId)} alt={t("alt-card")} />
            <aside>
              <h2>{card.nom}</h2>
              <p>Nom du cru : {cru.libelle}</p>
              <p>Région du cru : {card.region}</p>
              <p>Informations du cru : {cru.infos}</p>
            </aside>
          </section>
          <section>
            <Map lat={card.latitude} long={card.longitude} />
          </section>
        </main>
      )}
    </div>
  );
}

export default Card;
