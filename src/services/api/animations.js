import { BASE_URL } from "./api";


export function fetchAllAnimations() {
  return fetch(`${BASE_URL}/animations`).then((response) => response.json());
}

export function animationImgUrl(animationId) {
  return `${BASE_URL}/animations/${animationId}/image`;
}
