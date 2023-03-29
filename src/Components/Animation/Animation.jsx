import { useEffect, useState } from "react";
import { Redirect, useLocation, useRoute } from "wouter";
import { fetchAnimationById } from "../../services/api/animations";

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
}
