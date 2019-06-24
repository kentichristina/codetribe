import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
list=[{name:"home",path:"home"},
{name:"about",path:"about"},
{name:"contact",path:"contact"}]
  constructor(private router : Router) { }

  ngOnInit() {
  }
// onNavigation(item){
// this.router.navigateByUrl(item.path)
// }
}
