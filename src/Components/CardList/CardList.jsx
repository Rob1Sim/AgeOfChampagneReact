import { React, useState, useEffect } from "react";
import { fetchAllCards } from "../../services/api/cards";
import CardItem from "./CardItem";
import { handleClick } from "../../hooks/cards/cardsClick";

function CardList() {
  const [cardData, setCardData] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [isDataAvailable, setIsDataAvailable] = useState(true);

  useEffect(() => {
    setIsDataAvailable(true);
    // Fetch toutes les cartes
    fetchAllCards(searchParams)
      .then((data) => {
        // Si le fetch retourne quelque chose, crée un composant CardItem
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
        // Si le fetch ne retourne rien, isDataAvailable vaut false
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

  // Si les données de session sont présentes, essaie de faire un parse
  if (lastClickedCardsJson) {
    try {
      lastClickedCards = JSON.parse(lastClickedCardsJson);
    } catch (e) {
      console.error("Invalid JSON in session storage:", lastClickedCardsJson);
    }
  }

  const handleSearchInputChange = (event) => {
    setSearchParams(event.target.value);
  }

  return (
    <>
      <form>
        <label>Recherche :</label>
        <input type="text" value={searchParams} onChange={handleSearchInputChange} />
      </form>

      {searchParams ? (
        // Si il y a du contenu dans le formulaire de recherche :
        // Affiche liste des cartes ou rien si aucune carte n'est trouvée
        <>
          {cardData.length > 0 ? cardList : <p>Aucune carte n'a été trouvée.</p>}
        </>
      ) : (
        // Affiche les dix dernières cartes visitées
        <>
          <h2>Cartes récemment visitées :</h2>
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
          <h2>Liste des cartes :</h2> {cardList}
        </>
      )}
    </>
  );
}

export default CardList;
