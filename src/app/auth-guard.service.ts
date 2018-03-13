import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {AppState, getLoggedIn} from "./store";
import {Observable} from "rxjs/Observable";
import {Redirect} from "./store/auth/auth.actions";
import {map, take} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>,
              private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(getLoggedIn),
      map(authed => {
        if (!authed) {
          // this.store.dispatch(new Redirect());
          //  return false;
        }
        return true;
      }),
      take(1)
    )
  }


}
