import { Box, Button, Group, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ProdutoList } from '../components/ProdutosList/ProdutoList';
import { findAllProdutos, Produto } from '../services/produtos';

export function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [haveChanges, setHaveChanges] = useState(true);

  useEffect(() => {
    if (haveChanges) {
      findAllProdutos().then((data) => {
        setProdutos(data.data);
      });
    }

    setHaveChanges(false);
  }, [haveChanges]);

  return (
    <Box mt="lg">
      <Group
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Title mb="lg" order={2}>
          Listagem de Produtos
        </Title>

        <Button onClick={() => {}}>Adicionar Pedido</Button>
      </Group>

      <ProdutoList data={produtos} />
    </Box>
  );
}
