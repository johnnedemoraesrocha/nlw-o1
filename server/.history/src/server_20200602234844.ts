import express from 'express';
import path from 'path';
import rotas from './rotas';

const app = express();
app.use(express.json());
app.use(rotas);
app.use('/uploads', express.static(path.resolve()))
app.listen(3333);