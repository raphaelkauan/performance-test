export const environment = {
    urls: {
        url: 'http://localhost:3000',
    },
    options: {
        smokes: {
            smokeRegisterMovies: {
                vus: 5,
                duration: '1m',
                thresholds: {
                    http_req_duration: ['p(95)<200'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            smokeSearchMovies: {
                vus: 5,
                duration: '1m',
                thresholds: {
                    http_req_duration: ['p(95)<100'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            smokeSearchMovie: {
                vus: 5,
                duration: '1m',
                thresholds: {
                    http_req_duration: ['p(95)<50'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            smokeUpdateMovies: {
                vus: 5,
                duration: '1m',
                thresholds: {
                    http_req_duration: ['p(95)<300'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            smokeDeleteMovies: {
                vus: 5,
                duration: '1m',
                thresholds: {
                    http_req_duration: ['p(95)<400'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            smokeRegisterTickets: {
                vus: 5,
                duration: '1m',
                thresholds: {
                    http_req_duration: ['p(95)<300'],
                    http_req_failed: ['rate<0.01'],
                },
            },
        },

        loads: {
            loadRegisterMovies: {
                stages: [
                    { duration: '5m', target: 125 },
                    { duration: '5m', target: 125 },
                    { duration: '5m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(95)<200'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            loadSearchMovies: {
                stages: [
                    { duration: '5m', target: 115 },
                    { duration: '5m', target: 115 },
                    { duration: '5m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(95)<100'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            loadSearchMovie: {
                stages: [
                    { duration: '5m', target: 125 },
                    { duration: '5m', target: 125 },
                    { duration: '5m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(95)<50'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            loadUpdateMovies: {
                stages: [
                    { duration: '5m', target: 65 },
                    { duration: '5m', target: 65 },
                    { duration: '5m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(95)<300'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            loadDeleteMovies: {
                stages: [
                    { duration: '5m', target: 45 },
                    { duration: '5m', target: 45 },
                    { duration: '5m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(95)<400'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            loadRegisterTickets: {
                stages: [
                    { duration: '5m', target: 65 },
                    { duration: '5m', target: 65 },
                    { duration: '5m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(95)<300'],
                    http_req_failed: ['rate<0.01'],
                },
            },
        },

        stresses: {
            stressRegisterMovies: {
                stages: [
                    { duration: '5m', target: 50 },
                    { duration: '5m', target: 50 },
                    { duration: '5m', target: 100 },
                    { duration: '5m', target: 100 },
                    { duration: '5m', target: 150 },
                    { duration: '5m', target: 150 },
                    { duration: '5m', target: 200 },
                    { duration: '5m', target: 200 },
                    { duration: '5m', target: 250 },
                    { duration: '5m', target: 250 },
                    { duration: '5m', target: 300 },
                    { duration: '5m', target: 300 },
                    { duration: '5m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(95)<250'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            stressSearchMovie: {
                stages: [
                    { duration: '5m', target: 50 },
                    { duration: '5m', target: 50 },
                    { duration: '5m', target: 100 },
                    { duration: '5m', target: 100 },
                    { duration: '5m', target: 150 },
                    { duration: '5m', target: 150 },
                    { duration: '5m', target: 200 },
                    { duration: '5m', target: 200 },
                    { duration: '5m', target: 250 },
                    { duration: '5m', target: 250 },
                    { duration: '5m', target: 300 },
                    { duration: '5m', target: 300 },
                    { duration: '5m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(90)<50'],
                    http_req_failed: ['rate<0.01'],
                },
            },

            stressRegisterTickets: {
                stages: [
                    { duration: '5m', target: 50 },
                    { duration: '5m', target: 50 },
                    { duration: '5m', target: 100 },
                    { duration: '5m', target: 100 },
                    { duration: '5m', target: 150 },
                    { duration: '5m', target: 150 },
                    { duration: '5m', target: 200 },
                    { duration: '5m', target: 200 },
                    { duration: '5m', target: 250 },
                    { duration: '5m', target: 250 },
                    { duration: '5m', target: 300 },
                    { duration: '5m', target: 300 },
                    { duration: '5m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(95)<300'],
                    http_req_failed: ['rate<0.01'],
                },
            },
        },

        peaks: {
            peakRegisterMovies: {
                stages: [
                    { duration: '5m', target: 10 },
                    { duration: '5m', target: 25 },
                    { duration: '5m', target: 50 },
                    { duration: '1m', target: 200 },
                    { duration: '1m', target: 200 },
                    { duration: '1m', target: 100 },
                    { duration: '1m', target: 0 },
                ],
                thresholds: {
                    http_req_duration: ['p(95)<200'],
                    http_req_failed: ['rate<0.01'],
                },
            },
        },
    },
};
