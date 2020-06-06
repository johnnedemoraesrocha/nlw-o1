import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';

const rotas = express.Router();
const pointsController = new PointsController();

rotas.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

rotas.get('/itens',);


rotas.post('/points', pointsController.create);

export default rotas; 