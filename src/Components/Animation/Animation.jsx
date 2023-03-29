import React, { useEffect, useState } from "react";
import { Redirect, useLocation, useRoute } from "wouter";
import {
  animationImgUrl,
  fetchAnimationById,
} from "../../services/api/animations";
import Loading from "../Loading";
import { useTranslation } from "react-i18next";

export default function Animation() {
  const [match, { animId }] = useRoute("/animations/:animId");
  const [animation, setAnimation] = useState(undefined);
  const [location, setLocation] = useLocation();
  const {t} = useTranslation("animation");

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
        <div className="animation-item">
          <section>
            <img src={animationImgUrl(animId)} alt="Carte" />
            <aside className="info">
              <h2>{animation.nom}</h2>
              <label>
                {t("animation-hdeb")}
                <p>{animation.horaireDeb}</p>
              </label>
              <label>
                {t("animation-hfin")}
                <p>{animation.horaireFin}</p>
              </label>
              <label>
                {t("animation-prix")}
                <p>{animation.prix} &euro;</p>
              </label>
            </aside>
          </section>
        </div>
      )}
    </div>
  );
}
