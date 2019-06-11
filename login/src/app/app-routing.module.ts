import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{path:"",component:LoginComponent},
{path:"menu",component:MenuComponent,children:[{path:"home",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"contact",component:ContactComponent}]},{path:"detail",component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
