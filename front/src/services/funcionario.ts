import api from './api';

export interface Funcionario {
  id: number;
  nome: string;
  email: string;
  cargo: string;
}

export const findAllFuncionario = async () => {
  return api.get<Funcionario[]>('/funcionario');
};

export const createFuncionario = async (data: {
  nome: string;
  cargo: string;
  gerente?: string;
}) => {
  return api.post('/funcionario', { ...data });
};
