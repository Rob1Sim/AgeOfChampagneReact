export const BASE_URL = "https://127.0.0.1:8000/api";

export function fetchAllVignerons() {
  return fetch(`${BASE_URL}/vignerons`).then((response) => response.json());
}

export function vigneronImgUrl(vigneronId) {
  return `${BASE_URL}/vignerons/${vigneronId}/image`;
}
