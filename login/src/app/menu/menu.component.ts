import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pagelist= [{name:"home",path:"menu/home"},
  {name:"about",path:"menu/about"},
  {name:"contact",path:"menu/contact"}];

  constructor(private router :Router) { }

  ngOnInit() {
  }
  onNavigate(item){
    this.router.navigateByUrl(item.path)
  }
}
