import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseurl='https://ecommerce-api-6p26.onrender.com/api/v1/cart/' ;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBmNTMyMWM0ZmU3ZDU1MjVmZWQ0ZWEiLCJpYXQiOjE2NzkxNTE1MzgsImV4cCI6MTY4NjkyNzUzOH0.YQh7etIV2zdHVafYdIpYw_9r5lAebn0DJzIodMgz9RA'
    })
  }
  constructor(public http:HttpClient) { 
   
  }


  getCart(){
    return  this.http.get<any>(this.baseurl,this.httpOptions);
  }
}

