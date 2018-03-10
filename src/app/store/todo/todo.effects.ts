import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {TodoService} from "./todo.service";
import {Router} from "@angular/router";
import {DeleteFailure, TodoActionTypes} from "./todo.actions";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import * as fromTodoAction from "./todo.actions";
import {of} from "rxjs/observable/of";
import * as fromAuth from "../auth/auth.actions";

@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions,
              private todoService: TodoService,
              private router: Router) {
  }

  @Effect()
  loadAllTodos$: Observable<Action> = this.actions$
    .ofType(TodoActionTypes.LOAD_ALL)
    .switchMap(() =>
      this.todoService.getAllTodos()
        .map(data => new fromTodoAction.LoadAllSuccess(data))
    );

//  Create todo
  @Effect()
  createTodo$: Observable<Action> = this.actions$
    .ofType<fromTodoAction.Create>(TodoActionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(todo => this.todoService.addTodo(todo))
    .map(res => new fromTodoAction.CreateSuccess(res));

  //Delete todo
  @Effect()
  deleteTodo$ = this.actions$
    .ofType<fromTodoAction.Delete>(TodoActionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(todo => this.todoService.removeTodo(todo))
    .map(res => new fromTodoAction.DeleteSuccess(res))
    .catch(err => {
      return of(new fromTodoAction.DeleteFailure(err))
    })

  //search by id

}
