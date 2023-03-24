export const BASE_URL = "https://127.0.0.1:8000/api";

export function fetchAllCards() {
  return fetch(`${BASE_URL}/cartes`).then((response) => response.json());
}

export function cardImgUrl(cardId) {
  return `${BASE_URL}/cartes/${cardId}/image`;
}
