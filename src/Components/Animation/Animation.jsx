import React, { useEffect, useState } from "react";
import { Redirect, useLocation, useRoute } from "wouter";
import {
  animationImgUrl,
  fetchAnimationById,
} from "../../services/api/animations";
import Loading from "../Loading";

export default function Animation() {
  const [match, { animId }] = useRoute("/animations/:animId");
  const [animation, setAnimation] = useState(undefined);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    setAnimation(undefined);
    if (animId !== undefined && Number.isInteger(Number(animId))) {
      fetchAnimationById(animId)
        .then((data) => setAnimation(data))
        // eslint-disable-next-line react/react-in-jsx-scope
        .catch(() => <Redirect to="/" />);
    }
  }, [animId]);

  useEffect(() => {
    if (animation === null) {
      setLocation("/animations");
    }
  }, [animation]);

  return (
    <div>
      {animation === undefined ? (
        <Loading />
      ) : (
        <div>
          <section>
            <h2>{animation.nom}</h2>
            <img src={animationImgUrl(animId)} alt="Carte" />
            <aside>
              <label>
                <p>{`Début de l'animation :${animation.horaireDeb}`}</p>
              </label>
              <label>
                <p>{`Fin de l'animation :${animation.horaireFin}`}</p>
              </label>
              <label>
                <p>{`Prix d'entrée : ${animation.prix}`}</p>
              </label>
            </aside>
          </section>
        </div>
      )}
    </div>
  );
}
