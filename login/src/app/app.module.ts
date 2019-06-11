import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import{ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
