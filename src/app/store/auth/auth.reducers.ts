import {User} from "../models/user";
import {AuthActions, AuthActionTypes} from "./auth.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";


export interface State {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: State = {
  loggedIn: false,
  user: null,
};

export function authReducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.login
      }
    }
    case AuthActionTypes.LOGOUT: {
      return initialState
    }
    default:
      return state;
  }
}


export const getLoggedIn = (state: State) => state.loggedIn;

export const getUser = (state: State) => state.user;


