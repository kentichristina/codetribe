import { KeyproviderService } from './../keyprovider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
list;
 
  constructor(private keyproviderservice: KeyproviderService) 
  { this.keyproviderservice.getNew().subscribe((data)=>{this.list=data
    console.log(data)
  })
  
   }

  ngOnInit() {
  }

}
