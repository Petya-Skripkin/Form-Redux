import React from "react";
import { Formik } from "formik";
// import _get from "lodash/get";

import { Input, Checkbox, Button } from "../../components";
import { urls } from "../../constants";

import { loginValidationSchema } from "./validation";
// import { TABS } from "./mock";

import * as Styles from "./styles";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Redirect } from "react-router";

const Login = () => {
  const { email } = useTypedSelector(state => state.login);
  const { LoginUser } = useActions();

  const users = useTypedSelector(state => state.registr);

  console.log(users);
  const Submit = (e: { email: string; password: string; remember?: boolean; }) => {
    LoginUser(
      {
        email: e.email,
        password: e.password,
        loading: false,
        error: null
      },users);
  };

  return (
    <Styles.Container>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          email: "",
          password: "",
          remember: false,
        }}
        onSubmit={(e) => Submit(e)}
      >
        {(formikBag) => (
          <>
            <Styles.Deskription>Вход</Styles.Deskription>
            <Styles.InputConteiner>
              <Input
                title="Введите адресс эл. почты"
                props={{ type: "email" }}
                error={formikBag.touched.email && !!formikBag.errors.email}
                errorText="Неверно указан адресс эл. почты"
                formikProps={{
                  name: "email",
                  helperText: formikBag.touched.email && formikBag.errors.email,
                  error: formikBag.touched.email && !!formikBag.errors.email,
                  value: formikBag.values.email,
                  onChange: formikBag.handleChange,
                  onBlur: formikBag.handleBlur,
                }}
              />
              <Input
                title="Введите пароль"
                props={{ type: "password" }}
                error={
                  formikBag.touched.password && !!formikBag.errors.password
                }
                errorText="Пароль заполнен не верно"
                formikProps={{
                  name: "password",
                  helperText:
                    formikBag.touched.password && formikBag.errors.password,
                  error:
                    formikBag.touched.password && !!formikBag.errors.password,
                  value: formikBag.values.password,
                  onChange: formikBag.handleChange,
                  onBlur: formikBag.handleBlur,
                }}
              />
              <Button
                disabled={!formikBag.isValid && !!formikBag.errors}
                onClick={(e) => {
                  e.preventDefault();
                  formikBag.handleSubmit();
                }}
                type="submit"
              >
                Войти
              </Button>
            </Styles.InputConteiner>
            <Styles.LinkContent>
              <Checkbox
                title="Запомнить"
                isChecked={formikBag.values.remember}
                onChange={() => 
                  formikBag.handleChange({
                    target: {
                      name: "remember",
                      value: !formikBag.values.remember,
                    },
                  })
                }
              />
              <Styles.Reg to={urls.REGISTRATION}>Регистрация</Styles.Reg>
            </Styles.LinkContent>
          </>
        )}
      </Formik>
      {!!email && <Redirect to={urls.FORM} />}
    </Styles.Container>
  );
};

export default Login;
