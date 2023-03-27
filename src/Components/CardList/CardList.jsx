import { React, useState, useEffect } from "react";
import { fetchAllCards } from "../../services/api/cards";
import CardItem from "./CardItem";
import { handleClick } from "../../hooks/cards/cards";

function CardList() {
  const [cardData, setCardData] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [isDataAvailable, setIsDataAvailable] = useState(true);

  useEffect(() => {
    setIsDataAvailable(true);
    fetchAllCards(searchParams)
      .then((data) => {
        if (data["hydra:member"].length > 0) {
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
        } else {
          setIsDataAvailable(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
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
  }
  
  function handleSearchInputChange(event) {
    setSearchParams(event.target.value);
  }

  return (
    <>
      <form>
        <label>Recherche :</label>
        <input type="text" value={searchParams} onChange={handleSearchInputChange} />
      </form>
  
      {searchParams ? 
      // Si il y a des paramètres de recherche : 
      (
        <>
          {cardData.length > 0 ? cardList : <p>Aucune carte n'a été trouvée.</p>}
        </>
      ) : 
      // Si les paramètres de recherche sont vides :
      (
        // Affiche les 10 dernières cartes visitées + la liste normale de cartes
        <>
          <h2>Liste des 10 dernières cartes :</h2>
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
        <h2>Toutes les cartes : </h2>
        {cardList}
        </>
      )}
    </>
  );
}

export default CardList;
