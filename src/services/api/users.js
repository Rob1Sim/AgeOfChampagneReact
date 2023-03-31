import { BASE_URL, BASE_URL_WITHOUT_API, fetchWithCredentials } from "./api";

export function getMe() {
  return fetchWithCredentials(`${BASE_URL}/me`).then((response) => {
    if (response.status === 401) {
      return Promise.resolve(null);
    }
    return response.json();
  });
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
