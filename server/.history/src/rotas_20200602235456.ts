import express from 'express';
import knex from './database/connection';

const rotas = express.Router();

rotas.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

rotas.get('/itens',async (request, response) => {
    const itens = await knex('itens').select('*');

    const serializedItens = itens.map(item => {
        return {
            name: item.name,
            image_url: item_image
        }
    })
    return response.json(serializedItens);
});

export default rotas; 