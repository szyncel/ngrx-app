import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from 'rxjs/observable/of';
import {_throw} from 'rxjs/observable/throw';
import {Authenticate, User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }


  login(user: Authenticate): Observable<Authenticate> {
    return this.http.get<Authenticate>(this.url+`users?login=${user.login}`);
  }

  logout() {

  }


}
