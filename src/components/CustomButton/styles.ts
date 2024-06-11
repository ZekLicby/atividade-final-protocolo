import styled from "styled-components";
import { theme } from "../../styles/themes";

export const Container = styled.button`
  width: 370px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
  background-color: ${theme.background};
  border: 0;
  cursor: pointer;
`;

export const ButtonTitle = styled.p`
  font-size: 16px;
`;
