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
        itens
    } = request.body;

    const ids = await knex('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp, 
        latitude, 
        longitude, 
        city,
        uf
    });

    const pointItens = itens.map(item_id => {
        return {
            item_id,
            point_id
        }
    })

    await knex('point_itens').insert();

    return response.json({ success: true})
    //return response.json(serializedItens);
});

export default rotas; 