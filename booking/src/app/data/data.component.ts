import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  cvv
  cardname
  cardnumber
  expmonth
  expyear
  fname
  lname

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 

      this.cvv= params.cvv;
      console.log(this.cvv); 
      this.cardname = params.cardname;
      console.log(this.cardname); 
      this.cardnumber = params.cardnumber;
      console.log(this.cardnumber); 
      this.expmonth = params.expmonth;
      console.log(this.expmonth);
      this.expyear = params.expyear;
      console.log(this.expyear);
      this.fname = params.fname;
      console.log(this.fname);
      this.lname = params.lname;
      console.log(this.lname);
  });
}

  }
