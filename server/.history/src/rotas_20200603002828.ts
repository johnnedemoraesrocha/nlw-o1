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
            id: item.id,
            name: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    })
    return response.json(serializedItens);
});


rotas.post('/points',async (request, response) => {
    const {
        image,
        name,
        email,
        whatsapp, 
        latitude, 
        longitude, 
        city,
        uf, 
        itensRequest
    } = request.body;

    const trx = await knex.transaction(); 

    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp, 
        latitude, 
        longitude, 
        city,
        uf
    });

    const ultimoIdInserido = insertedIds[0];

    const pointItens = itensRequest.map((item_id: number) => {
        return {
            item_id,
            point_id: ultimoIdInserido
        }
    })

    await trx('point_itens').insert(pointItens);

    return response.json({ success: ultimoIdInserido})
    //return response.json(serializedItens);
});

export default rotas; 