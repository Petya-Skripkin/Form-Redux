import React from "react";
import { Route, RouteProps } from "react-router-dom";


import AppLayout from "./app-layaut";
import { IMenu } from "./app-header/app-header";
// import { Redirect } from "react-router";

// import authHelpers from "helpers/auth";

// import { urls } from "../../constants";

// import AppLayout from "./app-layaut";

interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  [props: string]: any;
  menu: IMenu[];
}

const AppRoute = ({
  component: Component,
  menu,
  ...rest
}: AppRouteProps) => (
  <Route
    {...rest}
    render={(props) => (
      <AppLayout menu={menu}>
        <Component {...props} />
      </AppLayout>
    )}
  />
);

// const AppRoute = ({
//   component: Component,
//   menuItems,
//   roles,
//   ...rest
// }: AppRouteProps) => authHelpers.isAuthenticated
//   ? (
//       <Route
//         {...rest}
//         render={() => <></>}
//       />
//   )
//   : <Redirect to={{ pathname: urls.LOGIN }} />;

export default AppRoute;
