export const BASE_URL = "http://127.0.0.1:35729/api";
export function getMe() {
  return fetch(`${BASE_URL}/me`, { credentials: "include" }).then(
    (response) => {
      if (response.status === 401) {
        return Promise.resolve(null);
      }
      return response.json();
    }
  );
}

export function loginUrl() {
  return `${BASE_URL}/login?redirect=${window.location}`;
}

export function logoutUrl() {
  return new URL(`${BASE_URL}/logout`);
}
