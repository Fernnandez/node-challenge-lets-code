import { Box, Button, Group, Title } from '@mantine/core';
import { useState } from 'react';
import { CriarFuncionarioModal } from '../components/FuncionariosList/CriarFuncionarioModal/CriarFuncionarioModal';
import { FuncionarioList } from '../components/FuncionariosList/FuncionarioList';
import funcionarios from '../services/funcionarios.json';

export function Funcionarios() {
  const [openedModalCriar, setOpenedModalCriar] = useState(false);

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
          Listagem de Funcionarios
        </Title>

        <Button onClick={() => setOpenedModalCriar(true)}>
          Adicionar Funcionario
        </Button>
      </Group>

      <FuncionarioList data={funcionarios} />

      {/* modals */}

      <CriarFuncionarioModal
        opened={openedModalCriar}
        onClose={() => setOpenedModalCriar(false)}
      />
    </Box>
  );
}
