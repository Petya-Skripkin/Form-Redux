import styled from "styled-components";

import { colors } from "../../constants";

export const CheckLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.hawkesBlue};
  border-radius: 4px;
  background-color: ${colors.white};
  cursor: pointer;

  & > svg {
    stroke: ${colors.white};
    fill: ${colors.white};
  }
`;

export const CheckTitle = styled.p`
  margin-left: 14px;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.manatee};
`;

export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;

  :checked ~ ${CheckBoxContainer} {
    background-color: ${colors.black};
  }

  :checked ~ ${CheckTitle} {
    color: ${colors.black};
  }
`;

CheckBox.displayName = "CheckBox";
CheckBoxContainer.displayName = "StyleCheckBox";