import Knex from 'knex';

export async function up(knex: Knex) {
    //criar tabela
    knex.schema.createTable('points', table => {
        table.increments('id').primary()
    })
}

export async function down() {
    //voltar tabela
}