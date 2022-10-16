import { Modal, Text } from '@mantine/core';

interface EditarFuncionarioModalProps {
  opened: boolean;
  onClose: () => void;
  data: { id: number; nome: string; cargo: string; email: string };
}

// TODO criar estrutura do form e integrar com api

export function EditarFuncionarioModal({
  data,
  opened,
  onClose,
}: EditarFuncionarioModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Adicionar Funcionario"
      size="md"
      centered
    >
      <Text>
        Editando funcionario {data.id} - {data.nome}
      </Text>
    </Modal>
  );
}
