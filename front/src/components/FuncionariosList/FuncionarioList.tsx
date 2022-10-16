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
import { useState } from 'react';
import { EditarFuncionarioModal } from './EditarFuncionarioModal/EditarFuncionarioModal';

interface FuncionarioListProps {
  data: {
    id: number;
    nome: string;
    email: string;
    cargo: string;
  }[];
}

const getInitials = (name: string) => {
  const names = name.split(' ');
  return names[0][0].concat(names[1][0]);
};

export function FuncionarioList({ data }: FuncionarioListProps) {
  const [openedModalEditar, setOpenedModalEditar] = useState(false);
  const [funcionarioToEdit, setFuncionarioToEdit] = useState<{
    id: number;
    nome: string;
    email: string;
    cargo: string;
  } | null>(null);

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

  const rows = data.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <Group spacing="sm">
            <Avatar size="md" radius="lg" color="blue" variant="filled">
              {getInitials(item.nome)}
            </Avatar>
            <Text size="sm" weight={500}>
              {item.nome}
            </Text>
          </Group>
        </td>
        <td>{item.email}</td>
        <td>{item.cargo}</td>
        <td>
          <Group>
            <ActionIcon
              color="clue"
              onClick={() => handleOpenModalEditar(item)}
            >
              <IconEdit size={20} />
            </ActionIcon>
            <Popover width={200} position="right" withArrow shadow="md">
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
    );
  });

  return (
    <>
      <ScrollArea>
        <Table sx={{ minWidth: 400 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Cargo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
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
