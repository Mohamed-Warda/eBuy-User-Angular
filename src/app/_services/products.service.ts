import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseurl='https://ecommerce-api-6p26.onrender.com/api/v1' ;
  // baseurl='http://localhost:8080/api/v1' ;


  constructor(public http:HttpClient) { 
   
  }

  getAllProducts(){
    return  this.http.get<any>(`${this.baseurl}/products`);
    // log all the products
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
