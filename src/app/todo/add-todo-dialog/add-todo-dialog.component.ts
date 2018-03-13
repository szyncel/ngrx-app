import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {Todo} from "../../store/models/todo";
import {Observable} from "rxjs/Observable";
import * as fromRoot from "../../store";

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css']
})
export class AddTodoDialogComponent implements OnInit {

  todos$: Observable<Todo[]>;
  controls;
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddTodoDialogComponent>,
              private fb: FormBuilder,
              private store: Store<AppState>) {
  }


  add(todo) {
    this.dialogRef.close(todo.value);
  }

  save(form) {
    console.log(form.value);
  }

  private createForm1() {
    const group = this.fb.group({});

    this.todos$.subscribe(res => {
      for (let todo in res) {
        group.addControl(`${res[todo].id}`, this.fb.control({value: null, disabled: false}, Validators.required))
      }
    })
    this.form = group;
    console.log(this.form);
  }

  ngOnInit() {
    this.todos$ = this.store.select(fromRoot.getTodos);
    this.todos$.subscribe(res => this.createForm1());


    this.controls = Object.keys(this.form.controls);

    // console.log('Object keys:', controls);

  }

}
