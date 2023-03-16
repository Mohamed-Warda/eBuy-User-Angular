import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseurl='https://ecommerce-api-6p26.onrender.com/api/v1/products/' ;


  constructor(public http:HttpClient) { 
   
  }


  getAllProducts(){
    return  this.http.get<any>(this.baseurl);
  }
}
