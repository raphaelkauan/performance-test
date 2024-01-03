import {
    environment,
    SharedArray,
    ApiService,
    ENDPOINTS,
    sleep,
    cleanDatabase,
    Checks,
    htmlReport,
} from '../../../../support/utils/imports.js';

export function handleSummary(data) {
    return {
        'register-movies-smoke.test.html': htmlReport(data),
    };
}

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);
const checks = new Checks();

export const options = environment.options.smokes.smokeRegisterMovies;

const data = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../../data/static/movies-data.json'));
    return jsonData.movies;
});

export default function () {
    let movieIndex = __ITER % data.length;
    let movie = data[movieIndex];

    const res = apiService.post(ENDPOINTS.MOVIES_ENDPOINT, movie);

    checks.checkStatusCode('Status code is 201', res, 201);
    checks.checkTime('Check time register movies', res, 200);

    sleep(1);
}

export function teardown() {
    cleanDatabase();
}
