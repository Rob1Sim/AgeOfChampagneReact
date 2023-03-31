import { BASE_URL, BASE_URL_WITHOUT_API } from "./api";

export function fetchWithCredentials(url) {
  return fetch(url, { credentials: "include" });
}

export function fetchAllCards(search = null) {
  let url = `${BASE_URL}/cartes`;
  if (search) {
    url += `?nom=${search}`;
  }
  return fetchWithCredentials(url).then((response) => response.json());
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
  return fetchWithCredentials(`${BASE_URL}/cartes/${cardId}`).then(
    (response) => {
      if (!response.ok) {
        return Promise.resolve(null);
      }
      return response.json();
    }
  );
}

/**
 * Récupère le cru depuis le lien d'une carte
 * @param cruLink
 * @returns {Promise<Response>}
 */
export function fetchCruFromCard(cruLink) {
  return fetchWithCredentials(`${BASE_URL_WITHOUT_API}${cruLink}`).then(
    (response) => {
      if (!response.ok) {
        return Promise.resolve(null);
      }
      return response.json();
    }
  );
}

/**
 * Récupère le vignerons associé à une carte
 * @param wineMakerId
 * @returns {Promise<Response>}
 */
export function fetchWineMakerFromCard(wineMakerId) {
  return fetchWithCredentials(`${BASE_URL}/vignerons/${wineMakerId}`).then(
    (response) => {
      if (!response.ok) {
        return Promise.resolve(null);
      }
      return response.json();
    }
  );
}

/**
 * Retourne l'image de profil d'un vignerons
 * @param wineMakerId
 * @returns {string}
 */
export function wineMakerImgUrl(wineMakerId) {
  return `${BASE_URL}/vignerons/${wineMakerId}/image`;
}
