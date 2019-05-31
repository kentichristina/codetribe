import { Routes, RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message= "Homepage";
  name = new FormControl('')

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSecond(){
 this.router.navigateByUrl("second")
  }
  
  
}



