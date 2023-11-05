import styled from "styled-components";
import { blueWhite } from "../../../styles/tokens";

export const StyledInput = styled.input`
  width: 100%;
  height: 22px;
  border: none;
  padding: 0 6px 0 6px;
  border-radius: 3px;

  &:focus {
    outline: none;
    background-color: ${blueWhite};
  }
`;
