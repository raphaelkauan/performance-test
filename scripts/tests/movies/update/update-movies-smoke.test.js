import {
    environment,
    SharedArray,
    ApiService,
    ENDPOINTS,
    sleep,
    cleanDatabase,
    filterIdentifierMovies,
    Checks,
    htmlReport,
} from '../../../../support/utils/imports.js';

export function handleSummary(data) {
    return {
        'update-movies-smoke.test.html': htmlReport(data),
    };
}

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);
const checks = new Checks();

export const options = environment.options.smokes.smokeUpdateMovies;

const data = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../../data/static/movies-data.json'));
    return jsonData.movies;
});

export function setup() {
    return filterIdentifierMovies();
}

export default function (movieIds) {
    let movieIndex = __ITER % data.length;
    let movie = data[movieIndex];

    const movieIdIndex = __ITER;
    const movieId = movieIds[movieIdIndex];

    const res = apiService.put(ENDPOINTS.MOVIES_ENDPOINT + `/${movieId}`, movie);

    checks.checkStatusCode('Status code is 200', res, 200);
    checks.checkTime('Check time update movies', res, 300);

    sleep(1);
}

export function teardown() {
    cleanDatabase();
}
