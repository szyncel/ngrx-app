import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoDetailsComponent} from './todo-details/todo-details.component';
import {AddTodoDialogComponent} from './add-todo-dialog/add-todo-dialog.component';
import {TodoService} from '../store/todo/todo.service';
import {StoreModule} from "@ngrx/store";
import {todoReducer} from "../store/todo/todo.reducers";
import {TodoCardItemComponent} from './todo-card-item/todo-card-item.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    StoreModule.forFeature('todos', todoReducer)
  ],
  declarations: [TodoListComponent, TodoDetailsComponent, AddTodoDialogComponent, TodoCardItemComponent],
  providers: [TodoService]
})
export class TodoModule {
}
