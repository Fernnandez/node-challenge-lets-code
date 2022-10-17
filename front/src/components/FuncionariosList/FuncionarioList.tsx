import {
  ActionIcon,
  Avatar,
  Button,
  Center,
  Group,
  Popover,
  ScrollArea,
  Stack,
  Table,
  Text,
} from '@mantine/core';

import { IconEdit, IconTrash } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { findAllFuncionario, Funcionario } from '../../services/funcionario';
import { EditarFuncionarioModal } from './EditarFuncionarioModal/EditarFuncionarioModal';

interface FuncionarioListProps {
  data: Funcionario[];
}

const getInitials = (name: string) => {
  const names = name.split(' ');
  return names[0][0].concat(names[1][0]);
};

export function FuncionarioList({ data }: FuncionarioListProps) {
  const [openedModalEditar, setOpenedModalEditar] = useState(false);
  const [funcionarioToEdit, setFuncionarioToEdit] =
    useState<Funcionario | null>(null);

  const handleOpenModalEditar = (funcionario: {
    id: number;
    nome: string;
    email: string;
    cargo: string;
  }) => {
    setFuncionarioToEdit(funcionario);
    setOpenedModalEditar(true);
  };

  const handleDelete = (id: number) => {
    // TODO integrar com back funcao de excluir
  };

  return (
    <>
      <ScrollArea>
        <Table sx={{ minWidth: 400 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Gerente</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Group spacing="sm">
                      <Avatar
                        size="md"
                        radius="lg"
                        color="blue"
                        variant="filled"
                      >
                        {getInitials(item.nome)}
                      </Avatar>
                      <Text size="sm" weight={500}>
                        {item.nome}
                      </Text>
                    </Group>
                  </td>
                  <td>{item.cargo}</td>
                  <td>{item.id}</td>
                  <td>
                    <Group>
                      <ActionIcon
                        color="clue"
                        onClick={() => handleOpenModalEditar(item)}
                      >
                        <IconEdit size={20} />
                      </ActionIcon>
                      <Popover
                        width={200}
                        position="right"
                        withArrow
                        shadow="md"
                      >
                        <Popover.Target>
                          <ActionIcon color="red">
                            <IconTrash size={20} />
                          </ActionIcon>
                        </Popover.Target>
                        <Popover.Dropdown>
                          <Stack>
                            <Text size="sm">
                              Tem certeza que deseja excluir esse item ?
                            </Text>
                            <Button
                              size="xs"
                              variant="light"
                              color="red"
                              onClick={() => handleDelete(item.id)}
                            >
                              Remover
                            </Button>
                          </Stack>
                        </Popover.Dropdown>
                      </Popover>
                    </Group>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </ScrollArea>

      {/* modals */}

      {funcionarioToEdit && (
        <EditarFuncionarioModal
          opened={openedModalEditar}
          onClose={() => setOpenedModalEditar(false)}
          data={funcionarioToEdit}
        />
      )}
    </>
  );
}
