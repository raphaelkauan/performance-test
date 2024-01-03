import {
    environment,
    SharedArray,
    ApiService,
    ENDPOINTS,
    sleep,
    cleanDatabase,
    group,
    htmlReport,
    Checks,
} from '../../../support/utils/imports.js';

export function handleSummary(data) {
    return {
        'flow-smoke.test.html': htmlReport(data),
    };
}

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);
const checks = new Checks();

export const options = environment.options.smokes.smokeRegisterMovies;

const data = new SharedArray('movies', function () {
    const jsonData = JSON.parse(open('../../../data/static/movies-data.json'));
    return jsonData.movies;
});

const dataTickets = new SharedArray('tickets', function () {
    const jsonData = JSON.parse(open('../../../data/static/tickets-data.json'));
    return jsonData.tickets;
});

export default () => {
    group('Register Movies', () => {
        let movieIndex = __ITER % data.length;
        let movie = data[movieIndex];

        const res = apiService.post(ENDPOINTS.MOVIES_ENDPOINT, movie);

        checks.checkStatusCode('Status code is 201', res, 201);
        checks.checkTime('Check time register movies', res, 200);
    });

    sleep(1);

    group('Register Tickets', () => {
        let ticketIndex = __ITER % dataTickets.length;
        let ticket = dataTickets[ticketIndex];

        const res = apiService.post(ENDPOINTS.TICKET_ENDPOINT, ticket);

        checks.checkStatusCode('Status code is 201', res, 201);
        checks.checkTime('Check time register movies', res, 300);
    });
};

export function teardown() {
    cleanDatabase();
}
