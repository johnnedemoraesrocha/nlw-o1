import Knex from 'knex';

export async function seed(knex: Knex){
    knex('itens'),insert([
        { title: 'Lâmpadas', image: 'lampadas.svg'},
        { title: 'Pilhas e Baterias', image: 'baterias.svg'},
        { title: 'Papeis e Papelão', image: 'papeis-pap.svg'},
        { title: 'Lâmpadas', image: 'lampadas.svg'},
        { title: 'Lâmpadas', image: 'lampadas.svg'},
        { title: 'Lâmpadas', image: 'lampadas.svg'},
        { title: 'Lâmpadas', image: 'lampadas.svg'},
    ])
}