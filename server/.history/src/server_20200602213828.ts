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

    return response.json(users);
});

app.get('/users/:id', (request, response) => {
    console.log('listagem de usuários');
    const id = request.params.id;

    return response.json(users[const]);
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