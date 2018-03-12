import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css']
})
export class AddTodoDialogComponent{

  constructor(public dialogRef: MatDialogRef<AddTodoDialogComponent>) { }

  add(todo) {
    this.dialogRef.close(todo.value);
  }

}
