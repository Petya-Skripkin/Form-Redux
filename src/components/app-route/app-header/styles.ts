import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import { colors } from "../../../constants";

export const Conteiner = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  background-color: ${colors.dark};
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: ${colors.white};
`;

export const ContentMenu = styled.ul`
  display: flex;
  width: 50%;
  height: 50px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  display: inline-block;
  width: 100%;
  height: 100%;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  line-height: 50px;

  &:hover {
    color: ${colors.green};
  }
`;

export const Item = styled(Link)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const MenuLink = styled.a`
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const BurgerMenuButtom = styled(IconButton)`
  display: none;
  & > span {
    color: ${colors.white};
    @media (min-width: 800px) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    display: inline-flex;
  }
`;

export const BurgerMenu = styled(Menu)`
  & > div {
    background-color: ${colors.dark};
  }
`;
