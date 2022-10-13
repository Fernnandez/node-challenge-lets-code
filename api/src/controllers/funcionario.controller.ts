import { Request, Response } from 'express';
import { Cargo } from '../entities/Funcionario';
import { FuncionarioService } from '../services/funcionario.service';

export class FuncionarioController {
  async findAll(resquest: Request, response: Response) {
    try {
      const service = new FuncionarioService();
      const result = await service.findAll();
      return response.json(result);
    } catch (error: any) {
      console.log(error);
      return response.json({ error: error.message });
    }
  }

  async create(resquest: Request, response: Response) {
    try {
      const service = new FuncionarioService();
      const result = await service.criarFuncionario({
        nome: `produto${Math.random().toFixed(2)}`,
        cargo: Cargo.Vendedor
      });
      return response.json(result);
    } catch (error: any) {
      return response.json({ error: error.message });
    }
  }
}
