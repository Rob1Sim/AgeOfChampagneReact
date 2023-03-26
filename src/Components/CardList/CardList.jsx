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

  const handleClick = (card) => {
    const lastClickedCard = JSON.parse(window.sessionStorage.getItem("lastClickedCards") || "[]");
    lastClickedCard.push(card);
    if (lastClickedCard.length > 10){
      lastClickedCard.shift();
    }
    window.sessionStorage.setItem("lastClickedCards", JSON.stringify(lastClickedCard));
  }
}
