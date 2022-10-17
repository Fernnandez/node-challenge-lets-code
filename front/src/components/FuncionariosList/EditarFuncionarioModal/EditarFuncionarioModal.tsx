import { Modal, Text } from '@mantine/core';

interface EditarFuncionarioModalProps {
  opened: boolean;
  onClose: () => void;
  data: { id: number; nome: string; cargo: string; email: string };
}

export function EditarFuncionarioModal({
  data,
  opened,
  onClose,
}: EditarFuncionarioModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Editar Funcionario"
      size="md"
      centered
    >
      <Text>
        Editando funcionario {data.id} - {data.nome}
      </Text>
    </Modal>
  );
}
