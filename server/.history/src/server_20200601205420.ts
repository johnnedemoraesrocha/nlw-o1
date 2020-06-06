import express from 'express';

const app = express();

app.get('/users', () => {
    console.log('listagem de usuários');
})