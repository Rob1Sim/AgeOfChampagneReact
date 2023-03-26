import { BASE_URL } from "./users";
export function fetchAllCards() {
  return fetch(`${BASE_URL}/cartes`).then((response) => response.json());
}

export function cardImgUrl(cardId) {
  return `${BASE_URL}/cartes/${cardId}/image`;
}
