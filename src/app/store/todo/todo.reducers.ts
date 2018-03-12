import {Todo} from "../models/todo";
import {TodoActions, TodoActionTypes} from "./todo.actions";


export interface TodoState {
  todos: Todo[],
  loaded: boolean,
  loading: boolean
}

export const initialState: TodoState = {
  todos: [],
  loaded: false,
  loading: false
}

export function todoReducer(state = initialState, action: TodoActions): TodoState {
  switch (action.type) {
    case TodoActionTypes.LOAD_ALL: {
      return {
        ...state,
        loading: true
      };
    }
    case TodoActionTypes.LOAD_ALL_SUCCESS: {
      return {
        loading: false,
        loaded: true,
        todos: action.payload
      };
    }
    case TodoActionTypes.CREATE_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case TodoActionTypes.DELETE_SUCCES: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    }
    default:
      return state;
  }
}


export const getTodos = (state: TodoState) => state.todos;


export const getLoading = (state: TodoState) => state.loading;





