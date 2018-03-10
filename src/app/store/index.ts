import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

import * as fromAuth from "./auth/auth.reducers";
import * as fromTodo from "./todo/todo.reducers";
import {State} from "./auth/auth.reducers";
import {TodoState} from "./todo/todo.reducers";

export interface AppState {
  authenticate: State;
  todos: TodoState
}

export const reducers: ActionReducerMap<AppState> = {
  authenticate: fromAuth.authReducer,
  todos: fromTodo.todoReducer
}


export const selectAppState = createFeatureSelector<AppState>('appState');

export const selectAppStateAuthenticate = createSelector(
  selectAppState,
  (state: AppState) => state.authenticate
)
