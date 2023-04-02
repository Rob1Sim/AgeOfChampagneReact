import React, { useEffect, useState } from "react";
import { Redirect, useLocation, useRoute } from "wouter";
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
            <img src={vigneronImgUrl(vigneronId)} />
            <aside>
              <h2>
                {vigneron.nom} {vigneron.prenom}
              </h2>
              <label>
                <h4>Adresse</h4>
                <p>{vigneron.adresse}</p>
              </label>
              <label>
                <h4>Code Postal</h4>
                <p>{vigneron.code_postal}</p>
              </label>
              <label>
                <h4>Ville</h4>
                <p>{vigneron.ville}</p>
              </label>
            </aside>
          </section>
          <section>
            <h3>Cru</h3>
            {cru === undefined ? (
              <Loading />
            ) : (
              <div>
                <label>
                  <h4>Nom du Cru</h4>
                  <p>{cru.libelle}</p>
                </label>
                <label>
                  <h4>Cru infos</h4>
                  <p>{cru.infos}</p>
                </label>
              </div>
            )}
          </section>
          <section>
            {produit === undefined ? (
              <Loading />
            ) : (
              <div>
                <label>
                  <h4>Nom du Produit</h4>
                  <p>{produit.libelle}</p>
                </label>
                <label>
                  <h4>Prix du produit</h4>
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
