import React, { useState, useEffect } from "react";
import { fetchAllAnimations } from "../../services/api/animations";
import AnimationItem from "./AnimationItem";
import Loading from "../Loading/Loading";

function AnimationList() {
  const [, setAnimationData] = useState([]);
  const [animationList, setAnimationList] = useState([]);
  const [, setIsDataAvailable] = useState(true);

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
        console.error("Error fetching animation:", error);
      });
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment,react/react-in-jsx-scope
  return (
    <div>
      <h2>Toutes les animations</h2>
      {animationList !== undefined && animationList !== null ? (
        <div>{animationList}</div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default AnimationList;
