import { Router } from 'express';
import { ProdutoController } from './controllers/produtoController.js';

export const router = Router();

router.get('/produto', new ProdutoController().findAll);
