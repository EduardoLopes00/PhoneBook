import { Modal } from "@/components/modal";
import { Container } from "./styles";

export interface RegisterModalProps {
  show: boolean;
}

export function RegisterModal({ show }: RegisterModalProps) {
  return (
    <Modal modalSize="sm" title="Phone Register" show={show}>
      <Container></Container>
    </Modal>
  );
}
