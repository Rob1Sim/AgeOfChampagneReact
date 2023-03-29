import { React, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchAllCards } from "../../services/api/cards";
import CardItem from "./CardItem";
import { handleClick } from "../../hooks/cards/cardsClick";
import "./CardList.scss";
import Loading from "../Loading/Loading";

function CardList() {
  const [cardData, setCardData] = useState([]);
  const [cardList, setCardList] = useState(undefined);
  const [searchParams, setSearchParams] = useState("");
  const [, setIsDataAvailable] = useState(true);
  const { t } = useTranslation("cardlist");

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
                className="cards"
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

  const lastClickedCardsJson =
    window.sessionStorage.getItem("lastClickedCards");
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
  };

  return (
    <div className="CardList">
      <form>
        <label htmlFor=".searchBar">{t("card-search")}</label>
        <input
          id="searchBar"
          type="text"
          value={searchParams}
          onChange={handleSearchInputChange}
        />
        <select className="dropdown-category" name="category">
          <option value selected>
            Catégorie
          </option>
          <option value={1}>Vignerons</option>
          <option value={2}>Cru</option>
          <option value={3}>Région</option>
        </select>
      </form>

      {searchParams ? (
        // Si il y a du contenu dans le formulaire de recherche :
        // Affiche liste des cartes ou rien si aucune carte n'est trouvée
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {cardData.length > 0 ? (
            cardList
          ) : (
            <p>Aucune carte n&apos a été trouvée.</p>
          )}
        </>
      ) : (
        // Affiche les dix dernières cartes visitées
        <div className="all-visited-cards">
          <h2>{t("recent-card")}</h2>
          {lastClickedCards.map((cardId) => {
            const card = cardData.find((c) => c.id === cardId);
            return card ? (
              <CardItem
                className="recent-cards"
                key={card.id}
                data={card}
                onClick={() => handleClick(card)}
              />
            ) : null;
          })}
          <h2>{t("list-card")}</h2>
          {cardList !== undefined && cardList !== null ? (
            <div>{cardList}</div>
          ) : (
            <Loading />
          )}
        </div>
      )}
    </div>
  );
}

export default CardList;
