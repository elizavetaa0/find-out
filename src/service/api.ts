const BASE_URL = 'https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit';

// URL для разработки
// const BASE_URL = 'http://localhost:8080/https://www.fruityvice.com/api/fruit';

export const getFruitsApi = () => {
  return fetch(`${BASE_URL}/all`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Error fetching fruits:', error);
      throw error;
    });
};
