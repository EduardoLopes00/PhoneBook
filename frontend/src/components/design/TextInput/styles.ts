import { blueWhite, normalBlue } from "@/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 22px;
    border: none;
    padding: 0 6px 0 25px;
    border-radius: 3px;

    &:focus {
      outline: none;
      background-color: ${blueWhite};
    }
  }

  span {
    color: ${normalBlue};
    position: absolute;
    font-size: 20px;
    top: 1px;
    left: 3px;
  }
`;
