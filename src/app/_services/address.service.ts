
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
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFlYzU5ODBhYTc2MTdmYTlmNmQyNTEiLCJpYXQiOjE2ODAwMDQ2MDIsImV4cCI6MTY4Nzc4MDYwMn0.zAHeHXEEMsh8lAc89oD5M8VPkthkxHcqofM66NNq150'
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
  deleteUserAdress(addressID:any){
    return this.http.delete(`${this.baseurl}/${addressID}`,this.httpOptions)

  }
}





