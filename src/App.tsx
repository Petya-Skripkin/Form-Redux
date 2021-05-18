import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AppRoute } from "./components";
import { urls } from "./constants";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { MAIN_MENU, FORM_MENU } from "./mock";

import { Main, Form, Login, CheckIn } from "./pages";

function App() {
  const { email } = useTypedSelector((state) => state.login);

  return (
    <BrowserRouter>
      {!!email ? (
        <Switch>
          <AppRoute menu={MAIN_MENU} path={urls.MAIN} component={Main} />
          <AppRoute menu={FORM_MENU} path={urls.FORM} component={Form} />
        </Switch>
      ) : (
        <Redirect to={urls.LOGIN} />
      )}
      <Route path={urls.REGISTRATION} component={CheckIn} />

      <Route path={urls.LOGIN} component={Login} />
    </BrowserRouter>
  );
}

export default App;
