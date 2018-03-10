import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TodoModule} from "./todo/todo.module";
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/auth/auth.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {authReducer} from "./store/auth/auth.reducers";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    AuthModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({reducers}),
    // StoreModule.forFeature('appState', reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
