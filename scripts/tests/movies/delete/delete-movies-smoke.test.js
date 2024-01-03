import {
    environment,
    ApiService,
    ENDPOINTS,
    sleep,
    filterIdentifierMovies,
    Checks,
    htmlReport,
} from '../../../../support/utils/imports.js';

export function handleSummary(data) {
    return {
        'delete-movies-smoke.test.html': htmlReport(data),
    };
}

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);
const checks = new Checks();

export const options = environment.options.smokes.smokeDeleteMovies;

export function setup() {
    return filterIdentifierMovies();
}

export default function (movieIds) {
    const movieIdIndex = __VU * 150 + __ITER - 150;
    const movieId = movieIds[movieIdIndex];

    const res = apiService.delete(ENDPOINTS.MOVIES_ENDPOINT + `/${movieId}`);

    checks.checkStatusCode('Status code is 200', res, 200);
    checks.checkTime('Check time delete movies', res, 400);

    sleep(1);
}
