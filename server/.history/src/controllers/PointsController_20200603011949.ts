import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsController {

    async index(request: Request, response: Response){
        const { city, uf, itens } = request.query;

        const paserdItens = String(itens)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_itens', 'points.id', '=', 'point_itens.point_id')
            .whereIn('point_itens.item_id', paserdItens)

        return response.json({ ok: true });
    }

    async show(request: Request, response: Response ){
        const { id } = request .params;
        // mesmo que const id = ...id no final;
        
        const point  = await knex('points').where('id', id).first();

        if(!point){
            return response.status(400).json({ message: 'Point nor found' } );
        }else{

            const itens = await knex('itens')
            .join('point_itens', 'itens.id', '=', 'point_itens.item_id')
            .where('point_itens.point_id', id)
            .select('itens.title');

            return response.json({point, itens});
        }
    }

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
            success: true,
            novoId: ultimoIdInserido,
            ...point
        })
        //return response.json(serializedItens);
    }

}

export default PointsController;