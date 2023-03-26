import { useState, useEffect } from "react";
import { fetchAllAnimations } from "../../services/api/animations";
import AnimationItem from "./AnimationItem";

export function AnimationList() {
  const [animationData, setAnimationData] = useState([]);
  const [animationList, setAnimationList] = useState([]);

  useEffect(() => {
    fetchAllAnimations().then((data) => {
      setAnimationData(data["hydra:member"]);
      setAnimationList(
        data["hydra:member"].map((animation) => (
          <AnimationItem key={animation.id} data={animation} />
        ))
      );
    });
  }, []);

  return { animationList };
}

export default AnimationList;
