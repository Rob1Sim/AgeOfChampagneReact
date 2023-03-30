import { useState, useEffect } from "react";
import { fetchAllVignerons } from "../../services/api/vignerons";
import VigneronItem from "./VigneronItem";

export function VigneronList() {
  const [vigneronData, setVigneronData] = useState([]);
  const [vigneronList, setVigneronList] = useState([]);
  const [isDataAvailable, setIsDataAvailable] = useState(true);

  useEffect(() => {
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

  // eslint-disable-next-line react/react-in-jsx-scope,react/jsx-no-useless-fragment
  return <>{vigneronList}</>;
}

export default VigneronList;
