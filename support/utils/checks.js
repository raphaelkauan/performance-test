import { check } from 'k6';

export class Checks {
    checkStatusCode(specification, res, myStatus) {
        check(res, {
            [specification]: (r) => r.status === myStatus,
        });
    }

    checkMessage(specification, res, message, myMessage) {
        check(res, {
            [specification]: (r) => r.json(message).includes(myMessage),
        });
    }

    checkBody(specification, res) {
        check(res, {
            [specification]: (r) => r.json() !== undefined,
        });
    }

    checkMessageSignup(specification, res) {
        check(res, {
            [specification]: (r) => r.json('message').includes('Cadastro realizado com sucesso'),
        });
    }

    checkTime(specification, res, expectedTime) {
        check(res, {
            [specification]: (r) => r.timings.duration <= expectedTime,
        });
    }
}
