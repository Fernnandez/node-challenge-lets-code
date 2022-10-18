import { Produto } from '../entities/Produto';
import { typeorm } from './data-source';

export const populaBanco = async () => {
  const produto = await typeorm
    .getRepository(Produto)
    .createQueryBuilder('produto')
    .where('produto.descricao = :descricao', { descricao: 'produto 1' })
    .getOne();

  if (produto) {
    return;
  }

  await typeorm.createQueryRunner().query(`
  -- Produtos
  insert into produto (descricao, estoque, preco) values
  ('produto 1', 100, 99.99),
  ('produto 2', 87, 88.2),
  ('produto 3', 200, 205.5),
  ('produto 4', 0, 90);
  
  -- Gerentes
  insert into funcionario (nome, cargo) values 
  ('Funcionario Um', 'GERENTE'),
  ('Funcionario Dois', 'GERENTE');
  
  -- Vendedores
  insert into funcionario (nome, cargo, "gerenteId") values 
  ('Funcionario Tres', 'VENDEDOR', (select id from funcionario where nome = 'Funcionario Um')),
  ('Funcionario Quatro', 'VENDEDOR', (select id from funcionario where nome = 'Funcionario Dois')),
  ('Funcionario Cinco', 'VENDEDOR', (select id from funcionario where nome = 'Funcionario Um')),
  ('Funcionario Seis', 'VENDEDOR', (select id from funcionario where nome = 'Funcionario Um')),
  ('Funcionario Sete', 'VENDEDOR', (select id from funcionario where nome = 'Funcionario Dois'));
  
  -- Pedidos
  insert into pedido ("vendedorId", endereco_entrega, preco_total, data_pedido) values 
  ((select id from funcionario where nome = 'Funcionario Sete'), 'Rua Logradouro, 999', 0, '2022-10-16 00:00:01'),
  ((select id from funcionario where nome = 'Funcionario Tres'), 'Rua Logradouro, 123', 0, '2022-10-16 00:00:01'),
  ((select id from funcionario where nome = 'Funcionario Tres'), 'Rua Logradouro, 111', 0, '2022-10-16 00:00:01'),
  ((select id from funcionario where nome = 'Funcionario Tres'), 'Rua Logradouro, 456', 0, '2022-10-16 00:00:01'),
  ((select id from funcionario where nome = 'Funcionario Quatro'), 'Rua Logradouro, 774', 0, '2022-10-16 00:00:01'),
  ((select id from funcionario where nome = 'Funcionario Cinco'), 'Rua Logradouro, 876', 0, '2022-10-16 00:00:01'),
  ((select id from funcionario where nome = 'Funcionario Tres'), 'Rua Logradouro, 462', 0, '2022-10-16 00:00:01'),
  ((select id from funcionario where nome = 'Funcionario Quatro'), 'Rua Logradouro, 189', 0, '2022-10-16 00:00:01'),
  ((select id from funcionario where nome = 'Funcionario Sete'), 'Rua Logradouro, 982', 0, '2022-10-16 00:00:01'),
  ((select id from funcionario where nome = 'Funcionario Sete'), 'Rua Logradouro, 363', 0, '2022-10-16 00:00:01');
  
  -- Itens de pedido 
  insert into item_pedido ("pedidoId", "produtoId") values 
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 999'), (select id from produto where descricao = 'produto 1')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 999'), (select id from produto where descricao = 'produto 3')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 123'), (select id from produto where descricao = 'produto 2')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 111'), (select id from produto where descricao = 'produto 4')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 111'), (select id from produto where descricao = 'produto 3')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 456'), (select id from produto where descricao = 'produto 1')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 456'), (select id from produto where descricao = 'produto 2')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 456'), (select id from produto where descricao = 'produto 3')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 774'), (select id from produto where descricao = 'produto 3')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 876'), (select id from produto where descricao = 'produto 1')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 876'), (select id from produto where descricao = 'produto 2')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 876'), (select id from produto where descricao = 'produto 3')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 876'), (select id from produto where descricao = 'produto 4')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 462'), (select id from produto where descricao = 'produto 4')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 462'), (select id from produto where descricao = 'produto 3')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 189'), (select id from produto where descricao = 'produto 2')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 982'), (select id from produto where descricao = 'produto 2')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 982'), (select id from produto where descricao = 'produto 4')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 363'), (select id from produto where descricao = 'produto 1')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 363'), (select id from produto where descricao = 'produto 3')),
  ((select id from pedido where endereco_entrega = 'Rua Logradouro, 363'), (select id from produto where descricao = 'produto 4'));
  
  -- Atualiza total dos pedidos
  update pedido 
  set preco_total = precos.preco_total 
  from pedido p
  inner join 
  (
    select p.id, sum(p2.preco) as preco_total
    from pedido p 
    inner join item_pedido ip on p.id = ip."pedidoId" 
    inner join produto p2 on ip."produtoId" = p2.id 
    group by p.id
  ) as precos on p.id = precos.id
  where pedido.id = p.id  
  `);
};
