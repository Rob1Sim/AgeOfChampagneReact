export const BASE_URL = "https://127.0.0.1:8000/api";

export function fetchAllVignerons() {
  return fetch(`${BASE_URL}/vignerons`).then((response) => response.json());
}

export function vigneronImgUrl(vigneronId) {
  return `${BASE_URL}/vignerons/${vigneronId}/image`;
}

/**
 * Récupère le cru associé à un vigneron grâce à son ID
 * @param cruId
 * @returns {Promise<Response>}
 */
export function fetchCruFromVigneron(cruId) {
  return fetch(`${BASE_URL}/crus/${cruId}`, {
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  });
}

