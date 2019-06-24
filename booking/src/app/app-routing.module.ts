import { PaymentComponent } from './payment/payment.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [{path:"",component:MenuComponent,
                          children:[{path:"home",component:HomeComponent},
                          {path:"about",component:AboutComponent},
                          {path:"contact",component:ContactComponent},
                          {path:"login",component:LoginComponent},
                          {path:"rooms", component: RoomsComponent}
                        ]},
                          {path:"payment", component: PaymentComponent},
                          {path:"data", component: DataComponent},
                          
                        
                          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 