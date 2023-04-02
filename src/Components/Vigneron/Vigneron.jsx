import React, { useEffect, useState } from "react";
import { Redirect, useRoute } from "wouter";
import { useTranslation } from "react-i18next";
import {
  vigneronImgUrl,
  fetchProduitFromVigneron,
  fetchCruFromVigneron,
  fetchWineMakerByID,
} from "../../services/api/vignerons";
import Loading from "../Loading/Loading";
import "./Vigneron.scss";
import Error from "../Error/Error";

export function Vigneron() {
  const [, { vigneronId }] = useRoute("/vignerons/:vigneronId");
  const [vigneron, setVigneron] = useState();
  const [cru, setCru] = useState();
  const [produit, setProduit] = useState();
  const { t } = useTranslation("vigneron");

  useEffect(() => {
    setProduit(undefined);
    setCru(undefined);
    if (Number.isInteger(parseInt(vigneronId, 10))) {
      fetchWineMakerByID(vigneronId)
        .then((response) => {
          setVigneron(response);

          // Récupération du cru à partir de la relation vigneron
          fetchCruFromVigneron(response.cruID).then((cruResponse) => {
            if (cruResponse === null) {
              setCru(undefined);
            }
            setCru(cruResponse);
          });
          // Récupération du produit à partir de la relation vigneron
          fetchProduitFromVigneron(response.produitID).then(
            (produitResponse) => {
              if (produitResponse === null) {
                setProduit(undefined);
              }
              setProduit(produitResponse);
            }
          );
        })
        .catch(() => <Redirect to="/" />);
    }
  }, [vigneronId]);

  return (
    <div>
      {/* eslint-disable-next-line no-nested-ternary */}
      {vigneron === undefined ? (
        <Loading />
      ) : vigneron === null ? (
        <Error />
      ) : (
        <main>
          <section>
            <img src={vigneronImgUrl(vigneronId)} alt={t("alt-winemaker")} />
            <aside>
              <h2>
                {vigneron.nom} {vigneron.prenom}
              </h2>
              <label htmlFor=".adresseVigneron">
                {t("winemaker-adress")}
                <p className="adresseVigneron">{vigneron.adresse}</p>
              </label>
              <label htmlFor=".codePostalVigneron">
                {t("winemaker-postal-code")}
                <p className="codePostalVigneron">{vigneron.code_postal}</p>
              </label>
              <label htmlFor=".villeVigneron">
                {t("winemaker-city")}
                <p className="villeVigneron">{vigneron.ville}</p>
              </label>
            </aside>
          </section>
          <section>
            <h3>{t("vintage")}</h3>
            {cru === undefined ? (
              <Loading />
            ) : (
              <div>
                <label htmlFor=".nomCru">
                  {t("vintage-name")}
                  <p className="nomCru">{cru.libelle}</p>
                </label>
                <label htmlFor=".infosCru">
                  {t("vintage-infos")}
                  <p className="infosCru">{cru.infos}</p>
                </label>
              </div>
            )}
          </section>
          <section>
            <h3>{t("product")}</h3>
            {produit === undefined ? (
              <Loading />
            ) : (
              <div>
                <label htmlFor=".nomProduit">
                  {t("product-name")}
                  <p className="nomProduit">{produit.libelle}</p>
                </label>
                <label htmlFor=".prixProduit">
                  {t("product-price")}
                  <p className="prixProduit">{produit.prix}</p>
                </label>
              </div>
            )}
          </section>
        </main>
      )}
    </div>
  );
}

export default Vigneron;
