import { Repository } from 'typeorm';
import { typeorm } from '../data/data-source';
import { Produto } from '../entities/produto';

export class ProdutoService {
  private repository: Repository<Produto>;

  constructor() {
    this.repository = typeorm.getRepository(Produto);
  }

  async findAll() {
    return this.repository.find();
  }

  async createProduct() {
    return this.repository.save({
      nome: `produto${Math.random().toFixed(2)}`,
    });
  }
}
