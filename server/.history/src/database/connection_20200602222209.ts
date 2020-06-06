import knex from 'knex';

const connection = knex({
    client: 'sqlite3',
    connection : {
        filename: ''
    }
})