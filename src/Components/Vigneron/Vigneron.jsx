import React, { useEffect, useState } from "react";
import { Redirect, useLocation, useRoute } from "wouter";
import { useTranslation } from "react-i18next";
import {
  vigneronImgUrl,
  fetchProduitFromVigneron,
  fetchCruFromVigneron,
  fetchWineMakerByID,
} from "../../services/api/vignerons";
import Loading from "../Loading/Loading";

export function Vigneron() {
  const [, { vigneronId }] = useRoute("/vignerons/:vigneronId");
  const [vigneron, setVigneron] = useState(undefined);
  const [cru, setCru] = useState();
  const [produit, setProduit] = useState();
  const [location, setLocation] = useLocation();
  const { t } = useTranslation("vigneron");

  useEffect(() => {
    setProduit(undefined);
    setCru(undefined);
    setVigneron(undefined);
    if (vigneronId !== undefined && Number.isInteger(Number(vigneronId))) {
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

  useEffect(() => {
    if (vigneron === null) {
      setLocation("/vignerons");
    }
  }, [vigneron]);

  return (
    <div>
      {vigneron === undefined ? (
        <Loading />
      ) : (
        <main>
          <section>
            <img src={vigneronImgUrl(vigneronId)} alt={t("alt-winemaker")} />
            <aside>
              <h2>
                {vigneron.nom} {vigneron.prenom}
              </h2>
              <label>
                {t("winemaker-adress")}
                <p>{vigneron.adresse}</p>
              </label>
              <label>
                {t("winemaker-postal-code")}
                <p>{vigneron.code_postal}</p>
              </label>
              <label>
                {t("winemaker-city")}
                <p>{vigneron.ville}</p>
              </label>
            </aside>
          </section>
          <section>
            <h3>{t("vintage")}</h3>
            {cru === undefined ? (
              <Loading />
            ) : (
              <div>
                <label>
                  {t("vintage-name")}
                  <p>{cru.libelle}</p>
                </label>
                <label>
                  {t("vintage-infos")}
                  <p>{cru.infos}</p>
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
                <label>
                  {t("product-name")}
                  <p>{produit.libelle}</p>
                </label>
                <label>
                  {t("product-price")}
                  <p>{produit.prix}</p>
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
