import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários');
    response.json([
        'Johnne',
        'de',
        'Moraes',
        'Rocha',
    ]);
});

app.post('/users', (request, response) => {
    console.log('criar um novo usuario');
    response.json([
        'Johnne',
        'de',
        'Moraes',
        'Rocha',
    ]);
});
app.listen(3333);