
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl='https://ecommerce-api-6p26.onrender.com/api/v1/users' ;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFiNjllMjIyYWFkNGM2MzhlZjRmY2IiLCJpYXQiOjE2Nzk1MTgxODEsImV4cCI6MTY4NzI5NDE4MX0.k3WjnubX-QKPNPes4SseFTukHg6OSYWkkT23bDXZhyw'
    })
  }
  constructor(public http:HttpClient) { 
   
  }


  getUser(){
    return  this.http.get<any>(`${this.baseurl}/getMe`,this.httpOptions);
  }
  updateUser(item:object){
    return this.http.put(`${this.baseurl}/updateMe`, item,this.httpOptions)

  }
  changePassword(item:object){
    return this.http.put(`${this.baseurl}/changeMyPassword`, item,this.httpOptions)

  }
  deleleUser(_id:object){
    return this.http.delete(`${this.baseurl}/deleteMe`, _id)

  }
}



