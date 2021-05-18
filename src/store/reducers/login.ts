import { LoginState, LoginAction, LoginActionTypes } from "./../../types/login";

const initialState: LoginState = {
  name: "",
  email: "",
  age: "",
  password: "",
  loading: false,
  error: null
};

export const loginReducer = (state = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case LoginActionTypes.LOADING:
      return {...state, loading: true}
    case LoginActionTypes.LOGIN_SUCCESS: {
      return {...state, loading: false, email: action.payload.email, password: action.payload.password}
    }
    case LoginActionTypes.LOGIN_ERROR:
      return {...state, loading: false, error: action.payload}
    case LoginActionTypes.LOGOUT:
      return {...state, loading: false, email: "", password: ""}
    default:
      return state
  }
}
