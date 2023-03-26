import { React, useState, useEffect } from "react";
import { fetchAllCards } from "../../services/api/cards";
import { CardItem } from "./CardItem";

export function CardList() {
  const [cardData, setCardData] = useState([]);
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetchAllCards().then((data) => {
      setCardData(data["hydra:member"]);
      setCardList(
        data["hydra:member"].map((card) => (
          <CardItem
            key={card.id}
            data={card}
            onClick={() => handleClick(card)}
          />
        ))
      );
    });
  }, []);

  function handleClick(card) {
    const lastClickedCard = JSON.parse(
      window.sessionStorage.getItem("lastClickedCards") || "[]"
    );
    const cardIndex = lastClickedCard.indexOf(card.id);
    if (cardIndex !== -1) {
      // Remove the card from its current position and add it at the beginning
      lastClickedCard.splice(cardIndex, 1);
      lastClickedCard.unshift(card.id);
    } else {
      lastClickedCard.unshift(card.id);
      if (lastClickedCard.length > 10) {
        lastClickedCard.pop();
      }
    }
    window.sessionStorage.setItem(
      "lastClickedCards",
      JSON.stringify(lastClickedCard)
    );
  }

  const lastClickedCardsJson =
    window.sessionStorage.getItem("lastClickedCards");
  let lastClickedCards = [];

  if (lastClickedCardsJson) {
    try {
      lastClickedCards = JSON.parse(lastClickedCardsJson);
    } catch (e) {
      console.error("Invalid JSON in session storage:", lastClickedCardsJson);
    }
  }

  return (
    <>
      Liste des 10 dernières cartes :
      {lastClickedCards.map((cardId) => {
        const card = cardData.find((c) => c.id === cardId);
        return card ? (
          <CardItem
            key={card.id}
            data={card}
            onClick={() => handleClick(card)}
          />
        ) : null;
      })}
      Toutes les cartes :{cardList}
    </>
  );
}
