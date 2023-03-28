import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishingListService {

  baseurl='https://ecommerce-api-6p26.onrender.com/api/v1' ;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFlYzU5ODBhYTc2MTdmYTlmNmQyNTEiLCJpYXQiOjE2ODAwMDQ2MDIsImV4cCI6MTY4Nzc4MDYwMn0.zAHeHXEEMsh8lAc89oD5M8VPkthkxHcqofM66NNq150'
    })
  }
  constructor(public http:HttpClient) { 
   
  }


  getWishingList(){
    return  this.http.get<any>(`${this.baseurl}/wishlist`,this.httpOptions);
  }
  removeFromCart(id:string){

    return this.http.delete(`${this.baseurl}/wishlist/${id}`,this.httpOptions);
  }

  addToCart(item:object)
  {
  
   return this.http.post(`${this.baseurl}/cart`, item,this.httpOptions)
  }
  addToList(prdID:object)
  {
    return this.http.post(`${this.baseurl}/wishlist`, prdID,this.httpOptions)

  }
}
