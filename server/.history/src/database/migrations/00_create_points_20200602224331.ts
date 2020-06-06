import Knex from 'knex';

export async function up(knex: Knex) {
    //criar tabela
    knex.schema.createTable('points', table => {
        table.increments('id').primary()
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.string('image').notNullable();
    })
}

export async function down() {
    //voltar tabela
}