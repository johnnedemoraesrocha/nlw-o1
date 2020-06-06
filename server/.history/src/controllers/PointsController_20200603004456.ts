import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsController {
    async create(request: Request, response: Response) {
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

        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp, 
            latitude, 
            longitude, 
            city,
            uf
        };
    
        const insertedIds = await trx('points').insert(point);
    
        const ultimoIdInserido = insertedIds[0];
    
        const pointItens = itensRequest.map((item_id: number) => {
            return {
                item_id,
                point_id: ultimoIdInserido
            }
        })
    
        await trx('point_itens').insert(pointItens);
    
        await trx.commit();
        
        return response.json({ 
            success: ultimoIdInserido
        })
        //return response.json(serializedItens);
    }
}

export default PointsController;