export interface LoginState {
  name?: string;
  email: string;
  password: string;
  age?: string;
  loading: boolean;
  error: null | string;
};

export enum LoginActionTypes {
  LOADING= "LOADING",
  LOGIN_SUCCESS= "LOGIN_SUCCESS",
  LOGIN_ERROR= "LOGIN_ERROR",
  LOGOUT= "LOGOUT"
};

interface FetcLoginAction {
  type: LoginActionTypes.LOADING;
}
interface LoginSuccessAction {
  type: LoginActionTypes.LOGIN_SUCCESS;
  payload: LoginState;
}
interface LoginErrorAction {
  type: LoginActionTypes.LOGIN_ERROR;
  payload: string;
}
interface LogoutAction {
  type: LoginActionTypes.LOGOUT;
}
export type LoginAction = FetcLoginAction | LoginErrorAction | LoginSuccessAction | LogoutAction
