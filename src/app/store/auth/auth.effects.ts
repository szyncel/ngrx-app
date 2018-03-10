import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AuthService} from "./auth.service";
import {tap, map, mergeMap, exhaustMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {AuthActionTypes, Login} from "./auth.actions";

import * as fromAuth from "./auth.actions";
import "rxjs/add/operator/catch";
import {Authenticate} from "../models/user";

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: Login) => action.payload),
    exhaustMap((user: Authenticate) =>
      this.authService.login(user)
        .map(res => new fromAuth.LoginSuccess({login: user}))
        .catch(error => of(new fromAuth.LoginFailure(error)))
    )
  )

}
