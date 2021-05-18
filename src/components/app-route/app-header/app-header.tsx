import React from "react";
import { useActions } from "../../../hooks/useActions";
import MenuIcon from "@material-ui/icons/Menu";

import * as Styles from "./styles";

export interface IMenu {
  link: string;
  title: string;
}

interface IProps {
  menu: IMenu[];
}

const AppHeader = ({menu}: IProps) => {
  const { LogoutUser } = useActions();

  //BurgerMenu function
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Styles.Conteiner>
      <Styles.Logo>Some Logo</Styles.Logo>

      <Styles.BurgerMenuButtom
        aria-label="more"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Styles.BurgerMenuButtom>
      <Styles.BurgerMenu
        id="simple-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menu.map((item) =>
          item.link === "https://www.google.com/" ? (
            <Styles.MenuLink href={item.link}>
              <Styles.MenuItem>{item.title}</Styles.MenuItem>
            </Styles.MenuLink>
          ) : item.title === "Выход" ? (
            <Styles.MenuLink onClick={LogoutUser}>
              <Styles.MenuItem>{item.title}</Styles.MenuItem>
            </Styles.MenuLink>
          ) : (
            <Styles.Item to={item.link} onClick={handleClose}>
              <Styles.MenuItem>{item.title}</Styles.MenuItem>
            </Styles.Item>
          )
        )}
      </Styles.BurgerMenu>

      <Styles.ContentMenu>
        {menu.map((item) =>
          item.link === "https://www.google.com/" ? (
            <Styles.MenuLink href={item.link}>
              <Styles.MenuItem>{item.title}</Styles.MenuItem>
            </Styles.MenuLink>
          ) : item.title === "Выход" ? (
            <Styles.MenuLink onClick={LogoutUser}>
              <Styles.MenuItem>{item.title}</Styles.MenuItem>
            </Styles.MenuLink>
          ) : (
            <Styles.Item to={item.link}>
              <Styles.MenuItem>{item.title}</Styles.MenuItem>
            </Styles.Item>
          )
        )}
      </Styles.ContentMenu>
    </Styles.Conteiner>
  );
};

export default AppHeader;