const { faker } = require('../../support/libs/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR');
const fs = require('fs');

const data = {
    tickets: [],
};

const movieIds = ['0ctJpsT2Sp1m90na', 'KpUa8TrrkxO727jV', 'di75z4u2FiG6aiU5'];

for (let i = 0; i < 9000; i++) {
    const randomIndex = Math.floor(Math.random() * movieIds.length);
    const ticket = {
        movieId: movieIds[randomIndex],
        userId: faker.datatype.uuid(),
        seatNumber: 50,
        price: 20,
        showtime: '19:00',
    };
    data.tickets.push(ticket);
}

console.log(data.tickets);

const file = '../static/tickets-data.json';
const jsonData = JSON.stringify(data, null, 4);

fs.writeFile(file, jsonData, () => {
    console.log('Funcionando!');
});
