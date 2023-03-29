export const BASE_URL = "https://127.0.0.1:8000/api";

export function fetchAllAnimations() {
  return fetch(`${BASE_URL}/animations`).then((response) => response.json());
}

export function animationImgUrl(animationId) {
  return `${BASE_URL}/animations/${animationId}/image`;
}

export function fetchAnimationById(animId) {
  return fetch(`${BASE_URL}/animations/${animId}`, {
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  });
}
