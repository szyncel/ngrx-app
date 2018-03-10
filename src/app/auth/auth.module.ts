import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from "../material/material.module";
import { AuthService } from '../store/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule { }
