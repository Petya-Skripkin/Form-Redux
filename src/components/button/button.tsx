import styled from "styled-components";

import { colors } from "../../constants";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: ${colors.white};
  background-color: ${colors.cornflower};
  border: 0;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  outline: none;

  :disabled {
    background: ${colors.royalBlueLight};
    color: ${colors.darkTelegray};
    cursor: default;
  }
`;

export default Button;
