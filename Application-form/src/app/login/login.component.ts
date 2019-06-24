import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
list=[{name:"data",path:"data"}]
name=""
password=""
Email=""
ID_Number=""
Phone_number=""
  constructor(private route:Router) { }

  ngOnInit() {
  }
onLogin(){
  console.log(this.name)
  console.log(this.password)
  console.log(this.Email)
  console.log(this.ID_Number)
  // console.log(this.Phone_Number)

  this.route.navigate(['/data'], { queryParams: { name:this.name, password:this.password,Email:this.Email,ID_Number:this.ID_Number } });
}
}
