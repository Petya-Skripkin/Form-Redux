import { RegistrAction, RegistrActionTypes, RegistrState } from "../../types/registration";

import {Dispatch} from "redux";

export const RegistrUser = (props: RegistrState) => {
  return async (dispatch: Dispatch<RegistrAction>) => {
    try {
      dispatch({type: RegistrActionTypes.REGISTR_SUCCESS, payload: props})
    } catch (e) {
      console.log(e)
    }
  }
};
