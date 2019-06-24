import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { LoginNewComponent } from './login-new/login-new.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { DataComponent } from './data/data.component';
import { RoomsComponent } from './rooms/rooms.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    LoginNewComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PaymentComponent,
    DataComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
