import { ProdutoService } from '../service/produtoService.js';

export class ProdutoController {
  async findAll(resquest, response) {
    const service = new ProdutoService();

    try {
      const result = await service.findAll();
      return response.json(result);
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}
