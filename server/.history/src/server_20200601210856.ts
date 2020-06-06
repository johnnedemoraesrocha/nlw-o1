import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários');
    response.json([
        'Johnne',
        'de',
        'Moraes',
        'Rocha',
        'Rocha2',
    ]);
});

app.listen(3333);