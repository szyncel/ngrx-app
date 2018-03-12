import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

import * as fromAuth from "./auth/auth.reducers";
import * as fromLoginPage from "./auth/login-page.reducer";
import * as fromTodo from "./todo/todo.reducers";

import {TodoState} from "./todo/todo.reducers";

import {State} from "./auth/auth.reducers";
import {loginPageReducer, LoginPageState} from "./auth/login-page.reducer";


export interface AppState {
  authenticate: State,
  todos: TodoState,
  loginPage: LoginPageState
}

export const reducers: ActionReducerMap<AppState> = {
  authenticate: fromAuth.authReducer,
  todos: fromTodo.todoReducer,
  loginPage: loginPageReducer
}


export const getAuthState = createFeatureSelector<State>('auth');

export const getLoggedIn = createSelector(
  getAuthState,
  fromAuth.getLoggedIn
)

export const getUser = createSelector(
  getAuthState,
  fromAuth.getUser
)


export const getTodoState = createFeatureSelector<TodoState>('todos');

export const getTodos = createSelector(
  getTodoState,
  fromTodo.getTodos
)

export const getLoading = createSelector(
  getTodoState,
  fromTodo.getLoading
)

export const getLoginPageState = createFeatureSelector<LoginPageState>('loginPage');

export const getError = createSelector(
  getLoginPageState,
  fromLoginPage.getError
)
