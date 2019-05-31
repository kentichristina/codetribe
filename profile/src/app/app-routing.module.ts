import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent} from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';

const routes: Routes = [{path:"" ,component:MenuComponent,
children:[{path:"Home" ,component:HomeComponent},
{path:"Education" ,component:EducationComponent},
{path:"Contact" ,component:ContactComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
