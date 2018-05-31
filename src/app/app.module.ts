import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

import {CustomMaterialModule} from "./core/material.module";
import {AppRoutingModule} from "./core/app.routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ErrorDialogComponent
  ],
  imports: [BrowserAnimationsModule,    
    BrowserModule,
    FormsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents:[ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
