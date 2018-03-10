import {Todo} from "../models/todo";
import {createFeatureSelector} from "@ngrx/store";


export interface TodoState {
  todos: Todo[]
}

export const initialState: TodoState = {
  todos: []
}

export function todoReducer(state = initialState, action: any): TodoState {
  switch (action.type) {
    default:
      return initialState;
  }

}


export const getTodoState = createFeatureSelector<TodoState>('todos');


