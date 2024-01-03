import { environment, SharedArray, ApiService, ENDPOINTS, sleep, Checks } from '../../../../support/utils/imports.js';

const base_Uri = environment.urls.url;
const apiService = new ApiService(base_Uri);
const checks = new Checks();

export const options = environment.options.stresses.stressRegisterTickets;

const data = new SharedArray('tickets', function () {
    const jsonData = JSON.parse(open('../../../../data/static/tickets-data.json'));
    return jsonData.tickets;
});

export default function () {
    let ticketIndex = __ITER % data.length;
    let ticket = data[ticketIndex];

    const res = apiService.post(ENDPOINTS.TICKET_ENDPOINT, ticket);

    checks.checkStatusCode('Status code is 201', res, 201);
    checks.checkTime('Check time register movies', res, 300);

    sleep(1);
}
