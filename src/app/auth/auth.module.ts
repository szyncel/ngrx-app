import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from "../material/material.module";
import {AuthService} from '../store/auth/auth.service';
import {StoreModule} from "@ngrx/store";
import {authReducer} from "../store/auth/auth.reducers";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    StoreModule.forFeature('auth', authReducer)
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {
}
