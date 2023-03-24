import { useState, useEffect } from "react";
import { fetchAllCards } from "../../services/api/cards";

export function CardList() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchAllCards().then((data) =>
      {
        setCardData(data["hydra:member"]);
      }
    )
  }, []);

  return cardData.map((card) => <div>{card.name}</div>);
}