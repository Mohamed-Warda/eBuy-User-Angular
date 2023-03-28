import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
})
export class MyHomeComponent {
  page: number = 1;
  pageSize: number = 3;
  
  // productsLength: number = 6;

  getProduct() {
  }

  products: IProduct[] = [];
  categories: IProduct[] = [];

  filterByCategory(category: any) {
    let filteredProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      filteredProducts = res.data.filter((product: any) => {
        return product.category.name === category;
      });
      this.products = filteredProducts;
    });
  }

  filterByPrice(min: any, max: any) {
    let filteredProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      filteredProducts = res.data.filter((product: any) => {
        return (
          product.priceAfterDiscount >= min && product.priceAfterDiscount <= max
        );
      });
      this.products = filteredProducts;
    });
  }

  filterByRating(rating: any) {
    let filteredProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      filteredProducts = res.data.filter((product: any) => {
        return product.ratingsAverage >= rating;
      });
      this.products = filteredProducts;
    });
  }

  sortFromLowToHigh() {
    let sortedProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      sortedProducts = res.data.sort((a: any, b: any) => {
        return a.priceAfterDiscount - b.priceAfterDiscount;
      });
      this.products = sortedProducts;
    });
  }

  sortFromHighToLow() {
    let sortedProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      sortedProducts = res.data.sort((a: any, b: any) => {
        return b.priceAfterDiscount - a.priceAfterDiscount;
      });
      this.products = sortedProducts;
    });
  }

  

  constructor(
    private ProductsService: ProductsService,
    private router: Router
  ) {
   
  }

  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((res) => {
      this.products = res.data;
    });

    this.ProductsService.getAllCategories().subscribe((res) => {
      this.categories = res.data;
      for (let i = 0; i < this.categories.length; i++) {
      }
    });

   
   
  }

  productDetails(_id:any){
     this.router.navigate(['/product-detail', _id]);
      }
}
