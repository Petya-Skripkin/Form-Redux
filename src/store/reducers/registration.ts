import { RegistrAction, RegistrActionTypes, RegistrState } from "./../../types/registration";

const initialState: RegistrState[] = [];

export const registrReducer = (state = initialState, action: RegistrAction): RegistrState[] => {
  switch (action.type) {
    case RegistrActionTypes.REGISTR_SUCCESS: {
      const checkUser = [...state].find(item => item.email === action.payload.email);
      return !checkUser
        ? [
            ...state,
            ...[
              {
                error: null,
                loading: false,
                name: action.payload.name,
                email: action.payload.email,
                age: action.payload.age,
                password: action.payload.password,
              },
            ],
          ]
        : state;
    }
    default:
      return state
  }
}
