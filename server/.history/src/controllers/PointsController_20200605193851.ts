import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsController {

    async index(request: Request, response: Response){
        const { city, uf, itens } = request.query;

        const paserdItens = String(itens)
            .split(',')
            .map(item => Number(item.trim()));

            console.log(city);
            console.log(uf);
            console.log(paserdItens);

        const points = await knex('points')
            .join('point_itens', 'points.id', '=', 'point_itens.point_id')
            .whereIn('point_itens.item_id', paserdItens)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*')

        return response.json(points);
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
            itens
        } = request.body;
    
        const trx = await knex.transaction(); 

        const point = {
            image: 'https://images.unsplash.com/photo-1540661116512-12e516d30ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
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
   
        const pointItens = itens
        .split(',')
        .map((item: string) => Number(item.trim()))
        .map((item_id: number) => {
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