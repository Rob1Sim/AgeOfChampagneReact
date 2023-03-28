import { useState, useEffect } from "react";
import { fetchAllVignerons } from "../../services/api/vignerons";
import VigneronItem from "./VigneronItem";

export function VigneronList() {
  const [vigneronData, setVigneronData] = useState([]);
  const [vigneronList, setVigneronList] = useState([]);

  useEffect(() => {
    fetchAllVignerons().then((data) => {
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
    });
  }, []);

  // eslint-disable-next-line react/react-in-jsx-scope,react/jsx-no-useless-fragment
  return <>{vigneronList}</>;
}

export default VigneronList;
