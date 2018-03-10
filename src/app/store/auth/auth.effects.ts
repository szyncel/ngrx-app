import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AuthService} from "./auth.service";
import {tap, map, mergeMap, exhaustMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {AuthActionTypes, Login} from "./auth.actions";

import * as fromAuth from "./auth.actions";
import "rxjs/add/operator/catch";
import {Authenticate} from "../models/user";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: Login) => action.payload),
    exhaustMap((user: Authenticate) =>
      this.authService.login(user)
        .map(res => new fromAuth.LoginSuccess({login: res.login}))
        .catch(error => of(new fromAuth.LoginFailure(error)))
    )
  )

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(() => this.router.navigate(['/todos']))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(authed => {
      this.router.navigate(['/login']);
    })
  );

}
