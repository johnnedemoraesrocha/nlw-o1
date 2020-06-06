import express from 'express';
import { ExitStatus } from 'typescript';

const routers = express.Router();

routers.use(express.json());

routers.get('/', (request, response) => {

    return response.json(filteredUsers);
});

export routers 

