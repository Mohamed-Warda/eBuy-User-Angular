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
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFjZWIwZWZjNGM4MDBjOWZhMTQ5NmEiLCJpYXQiOjE2Nzk2ODEyOTgsImV4cCI6MTY4NzQ1NzI5OH0.idFZy91xNFIGlZPnJwV5erfIsvW_nOcptLXaObb1gVo'
    })
  }
  constructor(public http:HttpClient) { 
   
  }


  getCart(){
    return  this.http.get<any>(this.baseurl,this.httpOptions);
  }
}

