import React, { useContext, useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import { useTranslation } from "react-i18next";
import {
  fetchCard,
  fetchCruFromCard,
  cardImgUrl,
  fetchWineMakerFromCard,
  wineMakerImgUrl,
} from "../../services/api/cards";
import Loading from "../Loading/Loading";
import Map from "./Map";
import "./Card.scss";
import BugerButtonContext from "../../contexts/burgerMenu/index";
import Error from "../Error/Error";

function Card() {
  const [, { cardId }] = useRoute("/cartes/:cardId");
  const { t } = useTranslation("card");
  const { opened } = useContext(BugerButtonContext);
  const [card, setCard] = useState();
  const [cru, setCru] = useState();
  const [wineMaker, setWineMaker] = useState();
  useEffect(() => {
    setCard(undefined);
    setCru(undefined);
    setWineMaker(undefined);
    if (Number.isInteger(parseInt(cardId, 10))) {
      fetchCard(cardId).then((response) => {
        setCard(response);
        // Récupération du cru à partir de la relation
        fetchCruFromCard(response.cru_r).then((cruResponse) => {
          if (cruResponse === null) {
            setCru(undefined);
          }
          setCru(cruResponse);
        });
        // Récupération du vignerons à partir de la relation
        fetchWineMakerFromCard(response.vigneronID).then(
          (wineMakerResponse) => {
            if (wineMakerResponse === null) {
              setWineMaker(undefined);
            }
            setWineMaker(wineMakerResponse);
          }
        );
      });
    }
  }, [cardId]);

  return (
    <div>
      {card === undefined || cru === undefined ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{card === null ? <Error /> : <Loading />}</>
      ) : (
        /** si le menu burger est ouvert alors la class est display on * */
        <main className={opened ? "display-on" : "display-off"}>
          <section>
            <img src={cardImgUrl(cardId)} alt={t("alt-card")} />
            <aside>
              <h2>{card.nom}</h2>
              <label htmlFor=".nomCru">
                {t("vintage-name")}
                <p className="nomCru">{cru.libelle}</p>
              </label>
              <label htmlFor=".nomCru">
                {t("region-name")}
                <p className="nomCru">{card.region}</p>
              </label>
              <label htmlFor=".nomCru">
                {t("vintage-infos")}
                <p className="nomCru">{cru.infos}</p>
              </label>
            </aside>
          </section>
          <section>
            <h3>{t("winemaker")}</h3>
            {wineMaker === undefined ? (
              <Loading />
            ) : (
              <div className="wineMakerInfos">
                <img
                  src={wineMakerImgUrl(wineMaker.id)}
                  alt={t("alt-winemaker")}
                />
                <Link href={`/vignerons/${wineMaker.id}`}>
                  {wineMaker.prenom} {wineMaker.nom}
                </Link>
              </div>
            )}
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
