import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KeyproviderService {

  constructor(private http:HttpClient) { }
  
getNew(){
  return this.http.get('http://jsonplaceholder.typicode.com/users')
}

}
