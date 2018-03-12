import {Action} from "@ngrx/store";
import {Authenticate, User} from "../models/user";

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGIN_REDIRECT= '[Auth] Login Redirect'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(public payload: Authenticate) {
  }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;

  constructor(public payload: any) {
  }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;

}

export class Redirect implements Action {
  readonly type = AuthActionTypes.LOGIN_REDIRECT;

}

export type AuthActions = Login | LoginSuccess | Logout | LoginFailure | Redirect;
