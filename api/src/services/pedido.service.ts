import { Repository } from 'typeorm';
import { typeorm } from '../data/data-source';
import CriarPedidoDTO from '../dtos/CriarPedidoDTO';
import { Pedido } from '../entities/Pedido';

export class PedidoService {
  private pedidoRepository: Repository<Pedido>;

  constructor() {
    this.pedidoRepository = typeorm.getRepository(Pedido);
  }

  async findAll() {
    return this.pedidoRepository.find();
  }

  async criarPedido(pedido: CriarPedidoDTO) {
    return this.pedidoRepository.save(pedido);
  }
}
