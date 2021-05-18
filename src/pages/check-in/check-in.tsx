import React from "react";
import { Formik } from "formik";

import * as Styles from "./styles";

import { checkinValidationSchema } from "./validation";
import { Input, Button } from "../../components";
import { useActions } from "../../hooks/useActions";
import { Redirect } from "react-router";
import { urls } from "../../constants";

const CheckIn = () => {
  const { LoginUser, RegistrUser } = useActions();
  const [ click, onClick ] = React.useState(false);

  return (
    <Styles.Content>
      <Formik
        validationSchema={checkinValidationSchema}
        initialValues={{
          name: "",
          email: "",
          age: "",
          password: "",
          loading: false,
          error: null,
        }}
        onSubmit={(e) => {
          RegistrUser({
            name: e.name,
            email: e.email,
            age: e.age,
            password: e.password,
            loading: false,
            error: null,
          });
          onClick(!click);
        }}
      >
        {(formikBag) => (
          <>
            <Styles.Context>Регестрация</Styles.Context>
            <Input
              title="Введите ваше имя"
              type="text"
              error={formikBag.touched.name && !!formikBag.errors.name}
              errorText="Введите имя"
              formikProps={{
                name: "name",
                helperText: formikBag.touched.name && formikBag.errors.name,
                error: formikBag.touched.name && !!formikBag.errors.name,
                value: formikBag.values.name,
                onChange: formikBag.handleChange,
                onBlur: formikBag.handleBlur,
              }}
            />
            <Input
              title="Введите вашу электронную почту"
              type="email"
              error={formikBag.touched.email && !!formikBag.errors.email}
              errorText="Неверно введен адрес эл. почты"
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
              title="Укажите ваш возраст"
              value={formikBag.values.age}
              error={formikBag.touched.age && !!formikBag.errors.age}
              errorText="Ввод цифрами (например 35)"
              formikProps={{
                name: "age",
                helperText: formikBag.touched.age && formikBag.errors.age,
                error: formikBag.touched.age && !!formikBag.errors.age,
                onChange: formikBag.handleChange,
                onBlur: formikBag.handleBlur,
              }}
            />
            <Input
              title="Введите пароль"
              props={{ type: "password" }}
              error={formikBag.touched.password && !!formikBag.errors.password}
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
              Далее &gt;&gt;
            </Button>
            {click && <Redirect to={urls.LOGIN} />}
          </>
        )}
      </Formik>
    </Styles.Content>
  );
};

export default CheckIn;
