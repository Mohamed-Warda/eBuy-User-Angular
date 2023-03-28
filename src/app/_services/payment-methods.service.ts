import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {

  baseurl='https://ecommerce-api-6p26.onrender.com/api/v1/orders' ;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFlYzU5ODBhYTc2MTdmYTlmNmQyNTEiLCJpYXQiOjE2Nzk5NTYwNzksImV4cCI6MTY4NzczMjA3OX0.en7QPdKheRnF5Exu3o9WRbvawh2Jb3xKGw_P9E3KKjs'
    })
  }
  constructor(public http:HttpClient) { 
   
  }
  cashOrder(address:Object,cartID:String){
    return this.http.post(`${this.baseurl}/${cartID}`, address,this.httpOptions)

  }

  cardOrder(address:Object,cartID:String){
    return this.http.get(`${this.baseurl}/checkout-session/${cartID}`,this.httpOptions)

  }

}

