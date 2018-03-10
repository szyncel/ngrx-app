import {AuthActions, AuthActionTypes} from "./auth.actions";

export interface LoginPageState {
  error: string | null;
  pending: boolean;
}

export const initialState: LoginPageState = {
  error: null,
  pending: false
}


export function loginPageReducer(state = initialState, action: AuthActions): LoginPageState {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: LoginPageState) => state.error;

export const getPending = (state: LoginPageState) => state.pending;
