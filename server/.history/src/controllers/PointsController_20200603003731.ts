class PointsController {
    async create('/points', (request, response) {
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
    
        await trx.commit();
        
        return response.json({ success: ultimoIdInserido})
        //return response.json(serializedItens);
    }
}

export default PointsController;