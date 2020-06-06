import express from 'express';
import { celebrate, Joi } from 'celebrate';
import knex from './database/connection';
import path from 'path';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItensController  from './controllers/ItensController';



const rotas = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itensController = new ItensController();

rotas.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

rotas.get('/itens',itensController.index);


rotas.get('/points', pointsController.index);
rotas.get('/points/:id', pointsController.show);
rotas.get('/points/:id', pointsController.show);

rotas.post(
    '/points', 
    upload.single('image'), 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            cidade: Joi.number().required(),
            uf: Joi.number().required(),
            itens: Joi.string().required(),
        })
    }),
    pointsController.create);
//rotas.get('/uploads/', express.static(path.resolve(__dirname, '..', 'uploads')))

export default rotas; 