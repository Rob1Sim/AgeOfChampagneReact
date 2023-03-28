import { BASE_URL, BASE_URL_WITHOUT_API } from "./users";

export function fetchAllCards(search = null) {
  let url = `${BASE_URL}/cartes`;
  if (search) {
    url += `?nom=${search}`;
  }
  return fetch(url).then((response) => response.json());
}

export function cardImgUrl(cardId) {
  return `${BASE_URL}/cartes/${cardId}/image`;
}
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
  return fetch(`${BASE_URL_WITHOUT_API}${cruLink}`, {
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  });
}

/**
 * Récupère le vignerons associé à une carte
 * @param wineMakerId
 * @returns {Promise<Response>}
 */
export function fetchWineMakerFromCard(wineMakerId) {
  return fetch(`${BASE_URL}/vignerons/${wineMakerId}`, {
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  });
}
