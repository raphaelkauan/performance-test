const { faker } = require('../../support/libs/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR');
const fs = require('fs');

const data = {
    movies: [],
};

for (let i = 0; i < 9999; i++) {
    const movie = {
        title: faker.name.jobTitle(),
        description: faker.commerce.productDescription(),
        launchdate: faker.date.between(),
        showtimes: ['19:00', '20:00', '23:00'],
    };
    data.movies.push(movie);
}

console.log(data.movie);

const file = '../static/movies-data.json';
const jsonData = JSON.stringify(data, null, 4);

fs.writeFile(file, jsonData, () => {
    console.log('Funcionando!');
});
