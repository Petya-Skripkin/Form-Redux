export interface RegistrState {
  name?: string;
  email: string;
  password: string;
  age?: string;
  loading: boolean;
  error: null | string;
};

export enum RegistrActionTypes {
  REGISTR_SUCCESS= "REGISTR_SUCCESS"
};

interface RegistrSuccessAction {
  type: RegistrActionTypes.REGISTR_SUCCESS;
  payload: RegistrState;
}
export type RegistrAction = RegistrSuccessAction
