import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
fname
lname
  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
  }
  onLogin(){
  this.route.navigateByUrl("payment");
  console.log(this.fname);
  console.log(this.lname);
  this.route.navigate(['/payment'], { queryParams: { fname:this.fname,lname:this.lname} });
}
}
