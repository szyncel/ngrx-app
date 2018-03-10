import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../store/auth/auth.service";
import {Store} from "@ngrx/store";
import {getLoggedIn, State} from "../../store/auth/auth.reducers";
import * as fromAuth from "../../store/auth/auth.actions";
import * as fromReducer from "../../store/auth/auth.reducers";
import {User} from "../../store/models/user";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user$;

  constructor(private authService: AuthService,
              private store: Store<State>) {
    this.user$ = this.store.select(getLoggedIn);
    this.user$.subscribe(res => console.log(res));
  }

  submit(form) {
    this.store.dispatch(new fromAuth.Login(form.value));
    // this.authService.login(form.value).subscribe(res => console.log(res));
  }

  ngOnInit() {
  }

}
