import express from 'express';

const app = express();
app.use(express.json());

const users = [
    'Johnne',
    'de',
    'Johnne de Moraes',
    'Rocha',
];

app.get('/users', (request, response) => {
    console.log('listagem de usuários');
    const search = String(request.query.search);
    console.log(search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    console.log(filteredUsers);

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    console.log('listagem de usuários');
    const id = Number(request.params.id);

    return response.json(users[id]);
});

app.post('/users', (request, response) => {

    console.log('criar um novo usuario');

    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user);
});
app.listen(3333);