import { Request, Response } from 'express';
import { Funcionario } from '../entities/Funcionario';
import { ItemPedido } from '../entities/ItemPedido';
import { PedidoService } from '../services/pedido.service';

export class PedidoController {
  async findAll(resquest: Request, response: Response) {
    try {
      const service = new PedidoService();
      const result = await service.findAll();
      return response.json(result);
    } catch (error: any) {
      console.log(error);
      return response.json({ error: error.message });
    }
  }

  async create(resquest: Request, response: Response) {
    try {
      const service = new PedidoService();
      const result = await service.criarPedido({
        vendedor: new Funcionario(),
        itens: new Array<ItemPedido>(),
        data_pedido: new Date(),
        endereco_entrega: '',
        preco_total: 10
      });
      return response.json(result);
    } catch (error: any) {
      return response.json({ error: error.message });
    }
  }
}
