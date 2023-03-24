import { useState, useEffect } from "react";
import { fetchAllCards } from "../../services/api/cards";

export function CardList() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchAllCards().then((data) => {
      setCardData(data["hydra:member"]);
    });
  }, []);

  // eslint-disable-next-line react/react-in-jsx-scope
  return cardData.map((card) => <div key={card.id}>{card.name}</div>);
}
