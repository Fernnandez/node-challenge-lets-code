import { Repository } from 'typeorm';
import { typeorm } from '../data/data-source';
import CriarPedidoDTO from '../dtos/CriarPedidoDTO';
import { Pedido } from '../entities/Pedido';

export class PedidoService {
  private produtoRepository: Repository<Pedido>;

  constructor() {
    this.produtoRepository = typeorm.getRepository(Pedido);
  }

  async findAll() {
    return this.produtoRepository.find();
  }

  async criarPedido(pedido: CriarPedidoDTO) {
    return this.produtoRepository.save(pedido);
  }
}
