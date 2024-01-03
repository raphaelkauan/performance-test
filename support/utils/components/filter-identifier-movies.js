import { environment, ApiService, ENDPOINTS, SharedArray, cleanDatabase } from '../imports.js';

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);

const data = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../data/static/movies-data.json'));
    return jsonData.movies;
});

export function filterIdentifierMovies() {
    cleanDatabase();

    data.forEach((movie) => {
        apiService.post(ENDPOINTS.MOVIES_ENDPOINT, movie);
    });

    const res = apiService.get(ENDPOINTS.MOVIES_ENDPOINT);

    const movies = res.json();

    let movieIds = [];

    movies.forEach((movie) => {
        const movieId = movie._id;
        movieIds.push(movieId);
    });

    return movieIds;
}
