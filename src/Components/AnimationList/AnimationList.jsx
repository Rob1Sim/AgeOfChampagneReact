import React, { useState, useEffect } from "react";
import { fetchAllAnimations } from "../../services/api/animations";
import AnimationItem from "./AnimationItem";

function AnimationList() {
  const [, setAnimationData] = useState([]);
  const [animationList, setAnimationList] = useState([]);

  useEffect(() => {
    fetchAllAnimations().then((data) => {
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
    });
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment,react/react-in-jsx-scope
  return <>{animationList}</>;
}

export default AnimationList;
