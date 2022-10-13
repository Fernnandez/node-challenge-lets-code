import { Repository } from 'typeorm';
import { typeorm } from '../data/data-source';
import CriarFuncionarioDTO from '../dtos/CriarFuncionarioDTO';
import { Funcionario } from '../entities/Funcionario';

export class FuncionarioService {
  private funcionarioRepository: Repository<Funcionario>;

  constructor() {
    this.funcionarioRepository = typeorm.getRepository(Funcionario);
  }

  async findAll() {
    return this.funcionarioRepository.find();
  }

  async criarFuncionario(funcionario: CriarFuncionarioDTO) {
    return this.funcionarioRepository.save(funcionario);
  }
}
