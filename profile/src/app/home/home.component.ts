import { KeyproviderService } from './../keyprovider.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list
  constructor(private  KeyproviderService : KeyproviderService) {this.KeyproviderService.getNews().subscribe((data)=>{
    console.log()
    this.list=data
  })}


  ngOnInit() {
  }
  
}
