import {Action} from "@ngrx/store";
import {Todo} from "../models/todo";

export enum TodoActionTypes {
  CREATE = '[Todo] Create',
  CREATE_SUCCESS = '[Todo] Create Success',
  DELETE = '[Todo] Delete',
  DELETE_SUCCES = '[Todo] Delete Success',
  LOAD_ALL = '[Todo] Load All',
  LOAD_ALL_SUCCESS = '[Todo] Load All Success',
  ERROR='[Todo] DeleteFailure',
}

export class DeleteFailure implements Action {
  readonly type = TodoActionTypes.ERROR;

  constructor(public payload?: any) {
  }
}

export class Create implements Action {
  readonly type = TodoActionTypes.CREATE;

  constructor(public payload: Todo) {
  }
}

export class CreateSuccess implements Action {
  readonly type = TodoActionTypes.CREATE_SUCCESS;

  constructor(public payload: Todo) {
  }
}

export class Delete implements Action {
  readonly type = TodoActionTypes.DELETE;

  constructor(public payload: Todo) {

  }
}

export class DeleteSuccess implements Action {
  readonly type = TodoActionTypes.DELETE_SUCCES;

  constructor(public payload: any) {

  }
}

export class LoadAll implements Action {
  readonly type = TodoActionTypes.LOAD_ALL;

}

export class LoadAllSuccess implements Action {
  readonly type = TodoActionTypes.LOAD_ALL_SUCCESS;

  constructor(public payload: Todo[]) {
  }

}


export type TodoActions = Create | CreateSuccess | Delete | DeleteSuccess | LoadAll | LoadAllSuccess;

