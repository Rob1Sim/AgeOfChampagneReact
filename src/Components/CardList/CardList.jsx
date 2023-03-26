import { useState, useEffect } from "react";
import { fetchAllCards } from "../../services/api/cards";
import { CardItem } from "./CardItem";

export function CardList() {
  const [cardData, setCardData] = useState([]);
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetchAllCards().then((data) => {
      setCardData(data["hydra:member"]);
      setCardList(data["hydra:member"].map((card) =>
        <CardItem key={card.id} data={card} onClick={() => handleClick(card)}/>
      ));
    });
  }, []);

  // eslint-disable-next-line react/react-in-jsx-scope
  return <>{cardList}</>
}
