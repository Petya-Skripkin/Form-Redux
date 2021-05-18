import { LoginActionTypes, LoginAction, LoginState } from "../../types/login";

import {Dispatch} from "redux";

export const LoginUser = (props: LoginState, allUsers: LoginState[]) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    try {
      dispatch({ type: LoginActionTypes.LOADING });
      const checkUser = allUsers.find(
        (item) => item.email === props.email && item.password === props.password
      );
      if (checkUser) {
        dispatch({ type: LoginActionTypes.LOGIN_SUCCESS, payload: props });
      } else {
        throw new Error("Вы не зарегистрированы");
      }
    } catch (e) {
      dispatch({
        type: LoginActionTypes.LOGIN_ERROR,
        payload: "Произошла ошибка при загрузке пользователя",
      });
    }
  };
};

export const LogoutUser = () => {
  return async (dispatch: Dispatch<LoginAction>) => {
    try {
      dispatch({type: LoginActionTypes.LOADING})
      dispatch({type: LoginActionTypes.LOGOUT})
    } catch (e) {
      dispatch({
        type: LoginActionTypes.LOGIN_ERROR,
        payload: 'Произошла ошибка при выходе'
      })
    }
  }
};
