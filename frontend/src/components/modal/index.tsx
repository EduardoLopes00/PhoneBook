import { ReactNode, useState } from "react";
import { Container, Content, Header } from "./styles";
import { ModalSizesOptions } from "@/types/style";

export interface ModalProps {
  children?: ReactNode;
  show: boolean;
  title: string;
  modalSize: ModalSizesOptions;
}

export function Modal({ title, children, modalSize }: ModalProps) {
  const [show] = useState(true);

  if (!show) return null;

  return (
    <>
      <Container size={modalSize}>
        <Content size={modalSize}>
          <Header size={modalSize}>{title && <h3>{title}</h3>}</Header>
          {children}
        </Content>
      </Container>
    </>
  );
}
