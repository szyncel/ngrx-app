import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Todo} from "../models/todo";
import {_throw} from "rxjs/observable/throw";

@Injectable()
export class TodoService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url + `todo`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url + `todo`, {title: todo.title, note: todo.title})
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeTodo(todo: Todo) {
    return this.http.delete(this.url + `todo/${todo.id}`)
      .map(res => todo)
      .catch((error: any) => {console.log('test');
        return _throw('Invalid username or password');});

  }

}
