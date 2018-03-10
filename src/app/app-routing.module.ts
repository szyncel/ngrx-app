import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {TodoListComponent} from "./todo/todo-list/todo-list.component";
import {TodoDetailsComponent} from "./todo/todo-details/todo-details.component";
import {AuthGuard} from "./auth-guard.service";

const routes: Routes= [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodoListComponent, canActivate:[AuthGuard] },
  { path: 'todos/:id', component: TodoDetailsComponent,canActivate:[AuthGuard] },
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
