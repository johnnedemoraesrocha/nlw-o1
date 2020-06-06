import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';

const rotas = express.Router();
const pointController = new PointsController();

rotas.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

rotas.get('/itens',async (request, response) => {
    const itens = await knex('itens').select('*');

    const serializedItens = itens.map(item => {
        return {
            id: item.id,
            name: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    })
    return response.json(serializedItens);
});


rotas.post('/points', pointController);

export default rotas; 