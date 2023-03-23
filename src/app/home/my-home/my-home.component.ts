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
    console.log(this.page);
  }

  products: IProduct[] = [];
  categories: IProduct[] = [];

  filterByCategory(category: any) {
    let filteredProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      filteredProducts = res.data.filter((product: any) => {
        return product.category.name === category;
      });
      console.log(filteredProducts);
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
      console.log(filteredProducts);
      this.products = filteredProducts;
    });
  }

  filterByRating(rating: any) {
    let filteredProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      filteredProducts = res.data.filter((product: any) => {
        return product.ratingsAverage >= rating;
      });
      console.log(filteredProducts);
      this.products = filteredProducts;
    });
  }

  sortFromLowToHigh() {
    let sortedProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      sortedProducts = res.data.sort((a: any, b: any) => {
        return a.priceAfterDiscount - b.priceAfterDiscount;
      });
      console.log(sortedProducts);
      this.products = sortedProducts;
    });
  }

  sortFromHighToLow() {
    let sortedProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      sortedProducts = res.data.sort((a: any, b: any) => {
        return b.priceAfterDiscount - a.priceAfterDiscount;
      });
      console.log(sortedProducts);
      this.products = sortedProducts;
    });
  }

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((res) => {
      this.products = res.data;
      console.log(this.products);
      console.log(res.data);
    });

    this.ProductsService.getAllCategories().subscribe((res) => {
      this.categories = res.data;
      console.log(this.categories);
      for (let i = 0; i < this.categories.length; i++) {
        console.log(this.categories[i].name);
      }
    });

    // use filterBycategory with category name as dynamic input to filter products
  }
}
