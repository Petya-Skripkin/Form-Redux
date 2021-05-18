import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../constants";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  padding: 8% 35%;

  @media (max-width: 800px) {
    height: 300px;
    padding: 8% 10%;
  }
`;

export const Deskription = styled.p`
  font-size: 26px;
  text-align: center;
`;

export const InputConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const LinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Reg = styled(Link)`
  color: ${colors.blue};
`;