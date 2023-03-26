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

  const lastClickedCards = JSON.parse(window.sessionStorage.getItem("lastClickedCards") || "[]")

  // eslint-disable-next-line react/react-in-jsx-scope
  return <>
  Liste des 10 dernières cartes : 
  {lastClickedCards.map((card) => (
    <div key={card.id}>{card.name}</div>
  ))}
  Toutes les cartes :
  {cardList}</>
}
