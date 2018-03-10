import {Injectable} from '@angular/core';
import {CanActivate} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState, getLoggedIn} from "./store";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(getLoggedIn);
    //redirect to login page
  }


}
