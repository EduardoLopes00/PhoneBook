import { blueWhite, normalBlue } from "@/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 10px 0;
  z-index: 0;

  input {
    width: 100%;
    height: 22px;
    border: none;
    padding: 0 6px 0 20px;
    border-radius: 3px;

    &:focus {
      outline: none;
      background-color: ${blueWhite};
    }
  }

  span {
    color: ${normalBlue};
    position: absolute;
    font-size: 17px;
    top: 2.5px;
    left: 2.5px;
  }
`;
