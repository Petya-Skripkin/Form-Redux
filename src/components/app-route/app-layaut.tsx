import React from "react";

import AppHeader, { IMenu } from "./app-header/app-header";

import { LayoutContent } from "./styles";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  menu: IMenu[];
}

const AppLayout = ({ children, menu }: IProps) => (
  <div>
    <AppHeader menu={menu} />
    <LayoutContent>{children}</LayoutContent>
  </div>
);

export default AppLayout;
