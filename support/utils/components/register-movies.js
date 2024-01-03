import { environment, SharedArray, ApiService, ENDPOINTS } from '../../utils/imports.js';

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);

const data = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../data/static/movies-data.json'));
    return jsonData.movies;
});

export function registerMovies() {
    data.forEach((movie) => {
        apiService.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
    });
}
