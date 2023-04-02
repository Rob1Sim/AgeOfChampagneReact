import { useState, useEffect } from "react";
import {
  fetchAllVignerons,
  fetchCruFromVigneron,
  fetchProduitFromVigneron,
} from "../../services/api/vignerons";
import VigneronItem from "./VigneronItem";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

export function VigneronList() {
  const [vigneronData, setVigneronData] = useState([]);
  const [vigneronList, setVigneronList] = useState([]);
  const [cru, setCru] = useState();
  const [produit, setProduit] = useState();
  const [isDataAvailable, setIsDataAvailable] = useState(true);

  useEffect(() => {
    setIsDataAvailable(true);
    setProduit(undefined);
    setCru(undefined);
    setVigneronList(undefined);
    fetchAllVignerons()
      .then((data) => {
        // Si le fetch retourne quelque chose, crée un composant VigneronItem
        if (data["hydra:member"].length > 0) {
          setVigneronData(data["hydra:member"]);
          setVigneronList(
            data["hydra:member"].map((vigneron) => (
              <VigneronItem
                key={vigneron.id}
                data={vigneron}
                onClick={() => onclick(vigneron)}
              />
            ))
          );
          // Sinon le fetch ne retourne rien, isDataAvailable vaut false
        } else {
          setIsDataAvailable(false);
        }
        // Récupération du cru à partir de la relation vigneron
        fetchCruFromVigneron(data.cruID).then((cruResponse) => {
          if (cruResponse === null) {
            setCru(undefined);
          }
          setCru(cruResponse);
        });

        // Récupération du produit à partir de la relation vigneron
        fetchProduitFromVigneron(data.produitID).then((produitResponse) => {
          if (produitResponse === null) {
            setProduit(undefined);
          }
          setProduit(produitResponse);
        });
      })
      .catch((error) => {
        console.error("Error fetching winemaker:", error);
      });
  }, []);

  return (
    <div>
      <h2>Liste Vignerons</h2>
      {vigneronList !== undefined && vigneronList !== null ? (
        <div>{vigneronList}</div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default VigneronList;
