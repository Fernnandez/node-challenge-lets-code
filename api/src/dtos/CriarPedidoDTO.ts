import { Funcionario } from "../entities/Funcionario";
import { ItemPedido } from "../entities/ItemPedido";

export default interface CriarPedidoDTO {
    vendedor: Funcionario;
    itens: ItemPedido[]; // Alterar para usar uma interface simplificada
    endereco_entrega: string;
    preco_total: number;
    data_pedido: Date;
}