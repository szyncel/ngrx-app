import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import { TodoService } from '../store/todo/todo.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TodoListComponent, TodoDetailsComponent, AddTodoDialogComponent],
  providers: [TodoService]
})
export class TodoModule { }
