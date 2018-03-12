import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Logout} from "../../store/auth/auth.actions";
import {AppState, getLoggedIn} from "../../store";
import {Observable} from "rxjs/Observable";
import {User} from "../../store/models/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  user$:Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.user$=this.store.select(getLoggedIn);
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
