import express from 'express';
import knex from './database/connection';

const rotas = express.Router();

rotas.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

rotas.get('/itens', (request, response) => {
    const itens = await knex('itens').select('*');


    return response.json({ message: 'Hello Itens'});
});

export default rotas; 