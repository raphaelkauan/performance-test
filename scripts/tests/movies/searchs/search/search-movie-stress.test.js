import {
    environment,
    ApiService,
    ENDPOINTS,
    sleep,
    filterIdentifierMovies,
    Checks,
    htmlReport,
} from '../../../../../support/utils/imports.js';

export function handleSummary(data) {
    return {
        'search-movie-stress.test.html': htmlReport(data),
    };
}

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);
const checks = new Checks();

export const options = environment.options.loads.loadSearchMovie;

export function setup() {
    return filterIdentifierMovies();
}

export default function (movieIds) {
    const movieIdIndex = __ITER;
    const movieId = movieIds[movieIdIndex];

    const res = apiService.get(ENDPOINTS.MOVIES_ENDPOINT + `/${movieId}`);

    checks.checkStatusCode('Status code is 200', res, 200);
    checks.checkTime('Check time search movies', res, 50);

    sleep(1);
}
