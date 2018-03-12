import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../store/auth/auth.service";
import {Store} from "@ngrx/store";
import * as fromAuth from "../../store/auth/auth.actions";
import {getLoggedIn, State} from "../../store/auth/auth.reducers";
import {getError} from "../../store";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user$;
  error$;

  constructor(private authService: AuthService,
              private store: Store<State>) {
    this.user$ = this.store.select(getLoggedIn);
    this.error$=this.store.select(getError);
  }

  submit(form) {
    this.store.dispatch(new fromAuth.Login(form.value));
    // this.authService.login(form.value).subscribe(res => console.log(res));
  }

  ngOnInit() {
  }

}
