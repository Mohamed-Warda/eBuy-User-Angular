import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   baseurl='https://ecommerce-api-6p26.onrender.com/api/v1' ;
 // baseurl='http://localhost:8080/api/v1' ;


 private httpOptions= {}
  constructor(public http:HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFjZWIwZWZjNGM4MDBjOWZhMTQ5NmEiLCJpYXQiOjE2Nzk2ODEyOTgsImV4cCI6MTY4NzQ1NzI5OH0.idFZy91xNFIGlZPnJwV5erfIsvW_nOcptLXaObb1gVo'
      })}
  }

  getAllProducts(){
    return  this.http.get<any>(`${this.baseurl}/products`);
    // log all the products
  }
  getSingelProudect(id:any){
    return  this.http.get<any>(`${this.baseurl}/products/${id}`);
  }
  getAllCategories(){
    return  this.http.get<any>(`${this.baseurl}/categories`);
   
  }

  filterByCategory(category:string){
    // implement this method using /products endpoint and .filter
    
    const data = this.http.get<any>(`${this.baseurl}/products`);
    data.subscribe((res) => {
      
      const filteredProducts = res.data.filter((product: any) => {
        return product.category.name === category;
      });
      console.log(filteredProducts);
      return filteredProducts;

    });
  }
  // addToCart(id:String, color:string):Observable<any>{
  //   return this.http.post<any>("https://ecommerce-api-6p26.onrender.com/api/v1/cart",id,color,this.httpOptions);
  // }
  saveRating(data:any) {
  return this.http.post("https://ecommerce-api-6p26.onrender.com/api/v1/reviews",data)
  }

  // filterByPrice(min:number , max:number){
  //   // implement this method using /products endpoint and .filter
  //   const data = this.http.get<any>(`${this.baseurl}/products`);
  //   data.subscribe((res) => {
      
  //     const filteredProducts = res.data.filter((product: any) => {
  //       return product.priceAfterDiscount>=min && product.priceAfterDiscount<=max;
  //     });
  //     console.log(filteredProducts);
  //     return filteredProducts;

  //   });
  // }


  // filterByRating(rating:number){
  //   // implement this method using /products endpoint and .filter
  //   const data = this.http.get<any>(`${this.baseurl}/products`);
  //   data.subscribe((res) => {
  //     const filteredProducts = res.data.filter((product: any) => {
  //       return product.priceAfterDiscount>= rating;
  //     });
  //     console.log(filteredProducts);
  //     return filteredProducts;

  //   });
  // }
  
  
}
