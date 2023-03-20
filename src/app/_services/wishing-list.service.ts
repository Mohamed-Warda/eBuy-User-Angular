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
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBmNTMyMWM0ZmU3ZDU1MjVmZWQ0ZWEiLCJpYXQiOjE2NzkxNTE1MzgsImV4cCI6MTY4NjkyNzUzOH0.YQh7etIV2zdHVafYdIpYw_9r5lAebn0DJzIodMgz9RA'
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
}
