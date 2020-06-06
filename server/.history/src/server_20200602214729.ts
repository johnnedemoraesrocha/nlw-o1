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
    const search = request.query.search;
    console.log(search);

    const filteredUsers = users.filter(user => );
    return response.json(users);
});

app.get('/users/:id', (request, response) => {
    console.log('listagem de usuários');
    const id = Number(request.params.id);

    return response.json(users[id]);
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