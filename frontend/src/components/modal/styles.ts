import { modalSizes } from "@/styles/tokens";
import { ModalSizesOptions } from "@/types/style";
import styled from "styled-components";

interface ContainerProps {
  size: ModalSizesOptions;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;

  position: absolute;

  background: rgba(0, 0, 0, 0.75);
  background-blend-mode: color-burn;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 1;

  & + div {
    width: ${({ size }) => modalSizes[size].width};
  }
`;

interface HeaderProps extends ContainerProps {}

export const Header = styled.header<HeaderProps>`
  width: ${({ size }) => modalSizes[size].width};
  h3 {
  }
`;

interface ContentProps extends ContainerProps {}

export const Content = styled.div<ContentProps>`
  height: ${({ size }) => modalSizes[size].height};
`;
