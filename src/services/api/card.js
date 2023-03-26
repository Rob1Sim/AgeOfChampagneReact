import { BASE_URL, BASE_URL_WITHOUT_API } from "./users";

/**
 * Récupère une carte dans l'api
 * @param cardId
 * @returns {Promise<Response>}
 */
export function fetchCard(cardId) {
  return fetch(`${BASE_URL}/cartes/${cardId}`, {
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  });
}

/**
 * Récupère le cru depuis le lien d'une carte
 * @param cruLink
 * @returns {Promise<Response>}
 */
export function fetchCruFromCard(cruLink) {
  return fetch(`${BASE_URL_WITHOUT_API}/${cruLink}`, {
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  });
}

/**
 * Récupère l'image d'une carte
 * @param cardId
 * @returns {string}
 */
export function getCardImage(cardId) {
  return `${BASE_URL}/cartes/${cardId}/image`;
}
