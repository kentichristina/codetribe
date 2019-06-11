import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
name
password
Email
ID_Number
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 

      this.name = params.name;
      console.log(this.name); 
      this.password = params.password;
      console.log(this.password); 
      this.Email = params.Email;
      console.log(this.Email); 
      this.ID_Number = params.ID_Number;
      console.log(this.ID_Number);
    });
  }
}
