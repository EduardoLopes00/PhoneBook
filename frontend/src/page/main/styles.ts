import styled from "styled-components";
import { blueWhite, lightBlue } from "../../styles/tokens";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 500px;
  height: 600px;

  padding: 20px;

  color: ${blueWhite};
  border-radius: 12px;

  align-self: center;
  margin: 0 auto;

  background-color: ${lightBlue};
`;

export const IconAndTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-bottom: 40px;

  span {
    font-size: 35px;
  }
`;

export const ContactLabelAndButtonBox = styled(FlexDiv)`
  p {
    font-size: 20px;
  }

  justify-content: space-between;
`;
