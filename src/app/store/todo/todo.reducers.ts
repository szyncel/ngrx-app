import {Todo} from "../models/todo";
import {TodoActions, TodoActionTypes} from "./todo.actions";


export interface TodoState {
  todos: Todo[]
}

export const initialState: TodoState = {
  todos: []
}

export function todoReducer(state = initialState, action: TodoActions): TodoState {
  switch (action.type) {
    case TodoActionTypes.LOAD_ALL_SUCCESS: {
      return {
        todos: action.payload
      };
    }
    case TodoActionTypes.CREATE_SUCCESS: {
      return {
        todos: [...state.todos, action.payload]
      };
    }
    case TodoActionTypes.DELETE_SUCCES: {
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    }
    default:
      return state;
  }
}


export const getTodos = (state: TodoState) => state.todos;





