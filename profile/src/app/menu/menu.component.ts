import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  list=[{name:"Home" ,path:"Home"},
  {name:"Education" ,path:"Education"},
  {name:"Contact" ,path:"Contact"}]

  constructor(private router : Router) { }

  ngOnInit() {
  }
  onNavigation(item) {
    this.router.navigateByUrl(item.path)
  }
}
