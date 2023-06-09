import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { fetchAllVignerons } from "../../services/api/vignerons";
import VigneronItem from "./VigneronItem";
import Loading from "../Loading/Loading";
import "./VigneronList.scss";
import BugerButtonContext from "../../contexts/burgerMenu/index";

export function VigneronList() {
  const [, setVigneronData] = useState([]);
  const [vigneronList, setVigneronList] = useState([]);
  const [, setIsDataAvailable] = useState(true);
  const { t } = useTranslation("vigneronslist");
  const { opened } = useContext(BugerButtonContext);

  useEffect(() => {
    setIsDataAvailable(true);
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
      })
      .catch((error) => {
        console.error("Error fetching winemaker:", error);
      });
  }, []);

  return (
    <div className={opened ? "display-on" : "wineMaker"}>
      <h2>{t("list-winemakers")}</h2>
      {vigneronList !== undefined && vigneronList !== null ? (
        <div className="list-all-winemakers">{vigneronList}</div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default VigneronList;
