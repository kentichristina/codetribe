import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
firstname ="kenti"
lastname = "Motswagole"
ID=123654
  constructor(private router :Router) { }

  ngOnInit() {
  }
onligin(){
  this.router.navigateByUrl("contact")
}
}
