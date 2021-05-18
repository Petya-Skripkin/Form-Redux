import React from "react";
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';

import {
  Container,
  Title,
  ErrorText,
  Popup,
  RelativeBlock
} from "./styles";

interface IProps {
  title: string;
  type?: string;
  value?: string;
  props?: InputBaseProps;
  formikProps?: any;
  error?: boolean;
  errorText?: string;
  helpText?: string;
};

const Input = ({ title, type, value, props, formikProps, error = false, errorText, helpText }: IProps) => {
  return (
    <Container isError={error}>
      <Title>{title}</Title>
      <RelativeBlock>
        <InputBase
          className="base-input"
          type={type}
          defaultValue={value}
          {...props}
          {...formikProps}
        />
        {helpText &&
          <>
            <Popup>{helpText}</Popup>
          </>
        }
      </RelativeBlock>
      {error &&
        <ErrorText>{errorText}</ErrorText>
      }
    </Container>
  );
};

export default Input;
