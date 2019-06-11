
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
name="";
password="";

  constructor(private router: Router) { }
  onLogin(){
  
    console.log(this.name);
    console.log(this.password);
    
    this.router.navigate(['/detail'], { queryParams: { name:this.name,password:this.password } });
    
    
  }

  ngOnInit() {
  }

}
