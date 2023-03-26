import React from "react";
import { useRoute } from "wouter";

const Card = () => {
  const [, { cardId }] = useRoute("/cartes/:cardId");

};

export default Card;
