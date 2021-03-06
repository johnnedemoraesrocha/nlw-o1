import express from 'express';
import cors from 'cors';
import path from 'path';
import rotas from './rotas';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rotas);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.listen(3333);