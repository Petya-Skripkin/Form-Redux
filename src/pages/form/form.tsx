import React from "react";

import * as Styles from "./styles";

import { User } from "./mock";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Form = () => {
  const [{ name, email, age }] = useTypedSelector((state) => state.registr);
  const mass = [name, email, age]; 

  return (
    <Styles.FlexConteiner>
      <Styles.Image src="avataaars.svg" alt="" />
      {User.map((item) => (
        <Styles.Content>
          <Styles.Caption>{item.caption}</Styles.Caption>
          <Styles.Text>{mass[item.id]}</Styles.Text>
        </Styles.Content>
      ))}
    </Styles.FlexConteiner>
  );
};

export default Form;
