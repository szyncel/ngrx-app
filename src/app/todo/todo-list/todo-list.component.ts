import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {Create, CreateSuccess, Delete, LoadAll} from "../../store/todo/todo.actions";
import * as fromRoot from "../../store/index";
import {Todo} from "../../store/models/todo";
import {Observable} from "rxjs/Observable";
import {AddTodoDialogComponent} from "../add-todo-dialog/add-todo-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  loading$;

  constructor(private store: Store<AppState>,
              public dialog: MatDialog) {
    this.todos$ = this.store.select(fromRoot.getTodos);
    this.loading$ = this.store.select(fromRoot.getLoading);
    this.todos$.subscribe(res => console.log(res));
  }

  add() {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.store.dispatch(new LoadAll());
  }

  addTodo() {
    const todo = {
      title: "Testowy Temat",
      note: "tralalasldasdas"
    }

    this.store.dispatch(new Create(todo));
  }

  delete() {
    const todo = {
      title: "Testowy Temat",
      note: "tralalasldasdas",
      id: 8
    }
    this.store.dispatch(new Delete(todo));
  }

}
