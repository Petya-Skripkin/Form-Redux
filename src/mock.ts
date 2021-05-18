import { IMenu } from "./components/app-route/app-header/app-header";

import { urls } from "./constants";

export const MAIN_MENU: IMenu[] = [
  {
    link: urls.FORM,
    title: "Форма",
  },
  {
    link: urls.GOOGLE,
    title: "Гугл",
  },
  {
    link: urls.MAIN,
    title: "Выход",
  },
];

export const FORM_MENU: IMenu[] = [
  {
    link: urls.MAIN,
    title: "Главная",
  },
  {
    link: urls.GOOGLE,
    title: "Гугл",
  },
  {
    link: urls.MAIN,
    title: "Выход",
  },
];

