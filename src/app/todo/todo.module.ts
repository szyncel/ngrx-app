import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoDetailsComponent} from './todo-details/todo-details.component';
import {AddTodoDialogComponent} from './add-todo-dialog/add-todo-dialog.component';
import {TodoService} from '../store/todo/todo.service';
import {StoreModule} from "@ngrx/store";
import {todoReducer} from "../store/todo/todo.reducers";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('todos', todoReducer)
  ],
  declarations: [TodoListComponent, TodoDetailsComponent, AddTodoDialogComponent],
  providers: [TodoService]
})
export class TodoModule {
}
