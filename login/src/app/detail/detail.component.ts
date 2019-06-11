import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
// order: string;
name
password
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.name = params.name;
        console.log(this.name); 
        this.password = params.password;
        console.log(this.password); 
        
      });
  
  }
  
  
}


