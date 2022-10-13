import { Cargo } from "../entities/Funcionario";

export default interface CriarFuncionarioDTO {
    nome: string;
    cargo: Cargo;
}