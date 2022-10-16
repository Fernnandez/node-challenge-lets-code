import { Request, Response } from 'express';
import { Cargo, Funcionario } from '../entities/Funcionario';
import { FuncionarioService } from '../services/funcionario.service';

export class FuncionarioController {

  async findAll(request: Request, response: Response) {
    try {
      const funcionarioService = new FuncionarioService();
      const result = await funcionarioService.findAll();
      return response.json(result);
    } catch (error: any) {
      console.log(error);
      return response.json({ error: error.message });
    }
  }

  async create(request: Request, response: Response) {
    try {
      const funcionarioService = new FuncionarioService();
      const { nome, cargo, gerenteId } = request.body;
      
      let gerente: Funcionario | undefined;

      if (gerenteId) {
        gerente = await funcionarioService.findGerente(gerenteId) || undefined;
        if (!gerente) {
          return response.status(400).json({ error: "Gerente não encontrado" });
        }
      }
      const result = await funcionarioService.criarFuncionario({
        nome,
        cargo,
        gerente
      });

      return response.json(result);
    } catch (error: any) {
      return response.json({ error: error.message });
    }
  }
}
