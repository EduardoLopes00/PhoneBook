import { deleteRed, lightBlue, lightGray } from "@/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  color: black;

  flex: 1;
  padding: 8px 14px;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid ${lightBlue};
`;

export const NameAndPhoneContainer = styled.div`
  p {
    font-size: 18px;
    font-weight: 600;

    margin-bottom: 4px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 3px;

    font-size: 14px;

    color: ${lightGray};

    span.material-symbols-outlined {
      font-size: 15px;
    }
  }
`;

export const DeleteButton = styled.button`
  width: 27px;
  height: 27px;

  background-color: ${deleteRed};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 3px;

  span {
    font-size: 18px;
    color: white;
  }
`;
