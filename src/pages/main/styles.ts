import styled from "styled-components";
import { colors } from "../../constants";

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 50px 0;
  background-color: ${colors.green};
`;

export const Image = styled.img`
  width: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  font-size: 30px;
  color: ${colors.white};
`;

export const Text = styled.p`
  margin-top: 20px;
  color: ${colors.white};
`;
