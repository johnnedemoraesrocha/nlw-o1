import Knex from 'knex';

export async function up(knex: Knex) {
    //criar tabela
    return knex.schema.createTable('point_itens', table => {
        table.increments('id').primary()

        table.integer('point_id')
            .notNullable()
            .references('id');

        table.integer('item_id')
            .notNullable();
    })
}

export async function down(knex: Knex) {
        //voltar tabela
        return knex.schema.dropTable('point_itens');
}