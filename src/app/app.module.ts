import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { RutasModule } from './rutas/ruteando.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ListComponent } from './componentes/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RutasModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
