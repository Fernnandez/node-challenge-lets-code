import express from 'express';
import cors from 'cors';
import config from 'config';
import { router } from './src/routes.js';

const app = express();
const port = process.env.PORT || config.get('server.port');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
