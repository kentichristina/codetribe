
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
cvv="";
cardname="";
cardnumber="";
expmonth="";
expyear="";
fname="";
lname
  constructor(private route:ActivatedRoute,private router:Router)  { }

  ngOnInit() {
    
      this.route.queryParams
      .subscribe(params => {
        console.log(params) ;
  
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
        console.log(this.fname)
        this.lname = params.lname;
        console.log(this.lname)
    });

  }
  onSubmit(){
    console.log(this.cvv)
    console.log(this.cardname)
    console.log(this.cardnumber)
    console.log(this.expmonth)
    console.log(this.expyear)
    console.log(this.fname)
    console.log(this.lname)

  this.router.navigate(['login'], { queryParams: { fname:this.fname,lname:this.lname} });
  this.router.navigate(['/data'], { queryParams: { cardname:this.cardname,cardnumber:this.cardnumber,expmonth:this.expmonth,expyear:this.expyear,fname:this.fname,cvv:this.cvv,lname:this.lname} });
  }
  onclick(){
    this.router.navigateByUrl("home")}
}
  



  



 


