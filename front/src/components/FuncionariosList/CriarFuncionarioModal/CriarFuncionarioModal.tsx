import { Modal, Text } from '@mantine/core';

interface CriarFuncionarioModalProps {
  opened: boolean;
  onClose: () => void;
}

// TODO criar estrutura do form e integrar com api

export function CriarFuncionarioModal({
  opened,
  onClose,
}: CriarFuncionarioModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Adicionar Funcionario"
      size="md"
      centered
    >
      <Text>Criando novo funcionario</Text>
    </Modal>
  );
}
