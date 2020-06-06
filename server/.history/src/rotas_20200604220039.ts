import express from 'express';
import knex from './database/connection';
import path from 'path';

import PointsController from './controllers/PointsController';
import ItensController  from './controllers/ItensController';

const rotas = express.Router();
const pointsController = new PointsController();
const itensController = new ItensController();

rotas.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

rotas.get('/itens',itensController.index);

rotas.post('/points', pointsController.create);
rotas.get('/points', pointsController.index);
rotas.get('/points/:id', pointsController.show);
rotas.get('/points/:id', pointsController.show);
//rotas.get('/uploads/', express.static(path.resolve(__dirname, '..', 'uploads')))

export default rotas; 