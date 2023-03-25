export const BASE_URL = "https://127.0.0.1:8000/api";
export const BASE_URL_WITHOUT_API = "http://localhost:8000";
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
  return `${BASE_URL_WITHOUT_API}/login`;
}

export function logoutUrl() {
  return `${BASE_URL_WITHOUT_API}/logout`;
}

export function loginToAdminPanel() {
  return `${BASE_URL_WITHOUT_API}/admin`;
}
