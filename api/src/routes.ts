import { Router } from 'express';
import { ProdutoController } from './controllers/produto.controller';

export const router = Router();

router.get('/produto', new ProdutoController().findAll);

router.post('/produto', new ProdutoController().create);
