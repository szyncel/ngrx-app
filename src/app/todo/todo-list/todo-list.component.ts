import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {Create, CreateSuccess, Delete, LoadAll} from "../../store/todo/todo.actions";
import * as fromRoot from "../../store/index";
import {TodoService} from "../../store/todo/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$;

  constructor(private store: Store<AppState>,
              private todoService: TodoService) {
    this.todos$ = this.store.select(fromRoot.getTodos);
    this.todos$.subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.store.dispatch(new LoadAll());
  }

  addTodo() {
    const todo = {
      title: "Testowy Temat",
      note: "tralalasldasdas"
    }
    // this.todoService.addTodo(todo).subscribe(res=>console.log(res));
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
