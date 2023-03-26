export const BASE_URL = "https://127.0.0.1:8000/api";

export function fetchAllAnimations() {
  return fetch(`${BASE_URL}/animations`).then((response) => response.json());
}

export function animationImgUrl(animationId) {
  return `${BASE_URL}/animations/${animationId}/image`;
}
