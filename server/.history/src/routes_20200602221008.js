import express from 'express';
import { ExitStatus } from 'typescript';

const routers = express.Router();

routers.use(express.json());

routers.get('/', (request, response) => {
    console.log('listagem de usuários');
    const search = String(request.query.search);
    console.log(search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    console.log(filteredUsers);

    return response.json(filteredUsers);
});

