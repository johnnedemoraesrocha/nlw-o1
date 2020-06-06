import express from 'express';

const rotas = express.Router();

rotas.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

rotas.get('/itens', (request, response) => {
    const
});

export default rotas; 