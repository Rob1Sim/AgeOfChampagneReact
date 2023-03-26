import { BASE_URL } from "./users";

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
