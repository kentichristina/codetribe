import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{path:"",component:MenuComponent,
children:[{path:"home",component:HomeComponent}]},
{path:"booking",component:BookingComponent},
{path:"search",component:SearchComponent},{path:"payment",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
