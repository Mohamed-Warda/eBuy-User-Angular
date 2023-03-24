
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseurl='https://ecommerce-api-6p26.onrender.com/api/v1/addresses' ;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFjZWIwZWZjNGM4MDBjOWZhMTQ5NmEiLCJpYXQiOjE2Nzk2MTY3ODYsImV4cCI6MTY4NzM5Mjc4Nn0.H1fXC4qHQJAsQ84FXTOgKgQ42GIY4sGZFNr_w_Y44Ig'
    })
  }
  constructor(public http:HttpClient) { 
   
  }
  getUser(){
  //  return  this.http.get<any>(`${this.baseurl}/getMe`,this.httpOptions);
  }


  addUserAddress(item:Object){
    return this.http.post(`${this.baseurl}`, item,this.httpOptions)

  }
}





