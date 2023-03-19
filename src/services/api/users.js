export const BASE_URL = "http://127.0.0.1:35729/api";
export function getMe() {
  return fetch(`${BASE_URL}/me`).then((response) => {
    if (response.status === 401) {
      return Promise.resolve(null);
    }
    return response.json();
  });
}
