import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseurl='https://ecommerce-api-6p26.onrender.com/api/v1/cart' ;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFlYzU5ODBhYTc2MTdmYTlmNmQyNTEiLCJpYXQiOjE2Nzk5NTYwNzksImV4cCI6MTY4NzczMjA3OX0.en7QPdKheRnF5Exu3o9WRbvawh2Jb3xKGw_P9E3KKjs'
    })
  }
  constructor(public http:HttpClient) { 
   
  }


  getCart(){
    return  this.http.get<any>(this.baseurl,this.httpOptions);
  }

  updateItemQuantity(itemID:any,qntty:any){
    let Qnt={  quantity:qntty }
    return  this.http.put(`${this.baseurl}/${itemID}`,Qnt,this.httpOptions);
  }

  deleteByID(id:string)
  {
    return  this.http.delete(`${this.baseurl}/${id}`,this.httpOptions);

  }
  applyCoupon(cpn:string){
    let coupon={
      coupon:cpn
    }
 return  this.http.put(`${this.baseurl}/applyCoupon`,coupon,this.httpOptions);

  }
}