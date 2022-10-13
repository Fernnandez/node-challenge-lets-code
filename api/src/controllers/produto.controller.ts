import { Request, Response } from 'express';
import { ProdutoService } from '../services/produto.service';

export class ProdutoController {
  async findAll(resquest: Request, response: Response) {
    try {
      const service = new ProdutoService();
      const result = await service.findAll();
      return response.json(result);
    } catch (error: any) {
      console.log(error);
      return response.json({ error: error.message });
    }
  }

  async create(resquest: Request, response: Response) {
    try {
      const service = new ProdutoService();
      const result = await service.criarProduto({
        descricao: `produto${Math.random().toFixed(2)}`,
        estoque: 1,
        preco: 1.5
      });
      return response.json(result);
    } catch (error: any) {
      return response.json({ error: error.message });
    }
  }
}
