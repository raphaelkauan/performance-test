import { environment, ApiService, ENDPOINTS, sleep } from '../imports.js';

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);

export function cleanDatabase() {
    const res = apiService.get(ENDPOINTS.MOVIES_ENDPOINT);

    const movies = res.json();

    movies.forEach((movie) => {
        const movieId = movie._id;
        apiService.delete(ENDPOINTS.MOVIES_ENDPOINT + `/${movieId}`);
    });
}
