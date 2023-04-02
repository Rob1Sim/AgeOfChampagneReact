import { React, useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { fetchAllCards, getCardWithFilter } from "../../services/api/cards";
import CardItem from "./CardItem";
import { handleClick } from "../../hooks/cards/cardsClick";
import "./CardList.scss";
import Loading from "../Loading/Loading";
import BugerButtonContext from "../../contexts/burgerMenu/index";

/**
 * Utilise les données récupéré pour les transformer en Cartes et les afficher dans la vue
 * @param dataFilter
 * @param setCardData
 * @param setCardList
 * @param setIsDataAvailable
 */
function mapCardToTheView(
  dataFilter,
  setCardData,
  setCardList,
  setIsDataAvailable
) {
  if (dataFilter["hydra:member"].length > 0) {
    setCardData(dataFilter["hydra:member"]);
    setCardList(
      dataFilter["hydra:member"].map((card) => (
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
}

function CardList() {
  const [cardData, setCardData] = useState([]);
  const [cardList, setCardList] = useState(undefined);
  const [searchParams, setSearchParams] = useState("");
  const [category, setCategory] = useState("");
  const [, setIsDataAvailable] = useState(true);
  const { t } = useTranslation("cardlist");
  const { opened } = useContext(BugerButtonContext);

  useEffect(() => {
    setIsDataAvailable(true);
    // Fetch toutes les cartes
    fetchAllCards(searchParams)
      .then((data) => {
        // Si le fetch retourne quelque chose, crée un composant CardItem
        mapCardToTheView(data, setCardData, setCardList, setIsDataAvailable);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, [searchParams]);

  useEffect(() => {
    getCardWithFilter(category)
      .then((dataFilter) => {
        // Si le fetch retourne quelque chose, crée un composant CardItem
        mapCardToTheView(
          dataFilter,
          setCardData,
          setCardList,
          setIsDataAvailable
        );
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, [category]);

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

  const handleSelectChange = (event) => {
    if (event.target.value !== "category") {
      console.log(event.target.value);
      setCategory(event.target.value);
    } else {
      setCategory("");
    }
  };

  return (
    <div className={opened ? "display-on" : "CardList"}>
      <form>
        <label htmlFor=".searchBar">{t("card-search")}</label>
        <input
          id="searchBar"
          type="text"
          value={searchParams}
          onChange={handleSearchInputChange}
        />
        <select
          className="dropdown-category"
          name="category"
          onChange={handleSelectChange}
        >
          <option value defaultValue="category">
            Catégorie
          </option>
          <option value="nom">Nom</option>
          <option value="type">Type</option>
          <option value="region">Région</option>
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
          <div className="list-all-cards">
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
          </div>
          <h2>{t("list-card")}</h2>
          {cardList !== undefined && cardList !== null ? (
            <div className="list-all-cards">{cardList}</div>
          ) : (
            <Loading />
          )}
        </div>
      )}
    </div>
  );
}

export default CardList;
