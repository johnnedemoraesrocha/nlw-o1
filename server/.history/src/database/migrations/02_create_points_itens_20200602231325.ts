import Knex from 'knex';

export async function up(knex: Knex) {
    //criar tabela
    return knex.schema.createTable('point_itens', table => {
        table.increments('id').primary()
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex) {
        //voltar tabela
        return knex.schema.dropTable('point_itens');
}