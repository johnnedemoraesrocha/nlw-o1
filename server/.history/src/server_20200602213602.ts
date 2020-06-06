import express from 'express';

const app = express();

const users = [
    'Johnne',
    'de',
    'Moraes',
    'Rocha',
];

app.get('/users', (request, response) => {
    console.log('listagem de usuários');

    return response.json([
        'Johnne',
        'de',
        'Moraes',
        'Rocha',
    ]);
});

app.post('/users', (request, response) => {
    console.log('criar um novo usuario');
    const user = {
        name: 'Johnne',
        email: 'johnne@outlook.com'
    };
    return response.json(user);
});
app.listen(3333);