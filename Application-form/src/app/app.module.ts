import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from  '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
