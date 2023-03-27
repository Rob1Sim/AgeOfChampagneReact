import { React, useState, useEffect } from "react";
import { fetchAllCards } from "../../services/api/cards";
import CardItem from "./CardItem";
import { handleClick } from "../../hooks/cards/cards";

function CardList() {
  const [cardData, setCardData] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    fetchAllCards(searchParams).then((data) => {
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
  }, [searchParams]);

  const lastClickedCardsJson = window.sessionStorage.getItem("lastClickedCards");
  let lastClickedCards = [];

  if (lastClickedCardsJson) {
    try {
      lastClickedCards = JSON.parse(lastClickedCardsJson);
    } catch (e) {
      console.error("Invalid JSON in session storage:", lastClickedCardsJson);
    }
  } else {
    console.log("No data in session storage");
  }

  function handleSearchInputChange(event) {
    setSearchParams(event.target.value);
  }

  console.log(lastClickedCardsJson)

  return (
    <>
      <form>
        <label>Recherche :</label>
        <input type="text" value={searchParams} onChange={handleSearchInputChange} />
      </form>

      {searchParams ? (<>
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
        </>
      )
      : (cardList)
        }
    </>
  );
}

export default CardList;
