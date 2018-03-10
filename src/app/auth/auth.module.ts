import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from "../material/material.module";
import {AuthService} from '../store/auth/auth.service';
import {StoreModule} from "@ngrx/store";
import {authReducer} from "../store/auth/auth.reducers";
import {loginPageReducer} from "../store/auth/login-page.reducer";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    StoreModule.forFeature('auth', authReducer),
    StoreModule.forFeature('loginPage', loginPageReducer)
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {
}
