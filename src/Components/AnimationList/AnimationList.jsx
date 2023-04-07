import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { fetchAllAnimations } from "../../services/api/animations";
import AnimationItem from "./AnimationItem";
import Loading from "../Loading/Loading";
import "./AnimationList.scss";
import BugerButtonContext from "../../contexts/burgerMenu/index";

function AnimationList() {
  const [, setAnimationData] = useState([]);
  const [animationList, setAnimationList] = useState([]);
  const [, setIsDataAvailable] = useState(true);
  const { t } = useTranslation("animationslist");
  const { opened } = useContext(BugerButtonContext);

  useEffect(() => {
    setIsDataAvailable(true);
    fetchAllAnimations()
      .then((data) => {
        // Si le fetch retourne quelque chose, crée un composant AnimationItem
        if (data["hydra:member"].length > 0) {
          setAnimationData(data["hydra:member"]);
          setAnimationList(
            data["hydra:member"].map((animation) => (
              <AnimationItem
                key={animation.id}
                data={animation}
                onClick={() => onclick(animation)}
              />
            ))
          );
          // Sinon le fetch ne retourne rien, isDataAvailable vaut false
        } else {
          setIsDataAvailable(false);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error fetching animation:", error);
      });
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment,react/react-in-jsx-scope
  return (
    <div className={opened ? "display-on" : "list-animation"}>
      <h2>{t("list-animations")}</h2>
      {animationList !== undefined && animationList !== null ? (
        <div>{animationList}</div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default AnimationList;
