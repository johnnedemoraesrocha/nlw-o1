import express from 'express';
import { ExitStatus } from 'typescript';

const routes = express.Router();

routes.use(express.json());

routes.get('/', (request, response) => {

    return response.json({ message: 'Hello World'});
});

export default routes; 

