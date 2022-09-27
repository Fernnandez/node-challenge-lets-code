import { db } from '../config/db-config.js';

export class ProdutoService {
  async findAll() {
    return 'essa ação retorna todos os produtos service';
  }

  async createTable() {
    const test = await db.select().from('produtos');
    console.log(test);
  }
}
