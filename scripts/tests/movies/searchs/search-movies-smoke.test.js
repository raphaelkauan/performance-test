import {
    environment,
    ApiService,
    ENDPOINTS,
    sleep,
    registerMovies,
    Checks,
    htmlReport,
} from '../../../../support/utils/imports.js';

export function handleSummary(data) {
    return {
        'search-movies-smoke.test.html': htmlReport(data),
    };
}

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);
const checks = new Checks();

export const options = environment.options.smokes.smokeSearchMovies;

export function setup() {
    registerMovies();
}

export default function () {
    const res = apiService.get(ENDPOINTS.MOVIES_ENDPOINT);

    checks.checkStatusCode('Status code is 200', res, 200);
    checks.checkTime('Check time search movies', res, 100);

    sleep(1);
}
