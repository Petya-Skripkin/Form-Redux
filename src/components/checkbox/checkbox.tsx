import React from "react";

import CheckIcon from '@material-ui/icons/Check';

import * as Styled from "./styles";

interface ICheck {
  title?: string;
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox = ({ title = "", isChecked, onChange }: ICheck) => {
  return (
    <Styled.CheckLabel>
      <Styled.CheckBox type="checkbox" checked={isChecked} onChange={onChange}/>
      <Styled.CheckBoxContainer><CheckIcon fontSize="inherit"/></Styled.CheckBoxContainer>
      {title &&
        <Styled.CheckTitle>{title}</Styled.CheckTitle>
      }
    </Styled.CheckLabel>
  );
};

export default Checkbox;