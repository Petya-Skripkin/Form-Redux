import styled from "styled-components";
import { colors } from "../../constants";

export const FlexConteiner = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${colors.green};
  padding: 100px 0;

  @media (max-width: 1000px) {
    padding: 50px 0;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
`;

export const Content = styled.div`
  padding: 10px 0px;
  background-color: inherit;
`;

export const Caption = styled.h1`
  text-align: center;
  color: ${colors.white};
`;

export const Text = styled.p`
  text-align: center;
  color: ${colors.white};
`;
