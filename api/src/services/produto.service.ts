import { Repository } from 'typeorm';
import { typeorm } from '../data/data-source';
import { Produto } from '../entities/Produto';

export class ProdutoService {
  private produtoRepository: Repository<Produto>;

  constructor() {
    this.produtoRepository = typeorm.getRepository(Produto);
  }

  async findAll() {
    return this.produtoRepository.find();
  }

  async createProduct() {
    return this.produtoRepository.save({
      descricao: `produto${Math.random().toFixed(2)}`,
      estoque: 1,
      preco: 1.5
    });
  }
}
