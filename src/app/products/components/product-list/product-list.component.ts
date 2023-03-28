import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import { ProductsService } from 'src/app/_services/products.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { WishingListService } from 'src/app/_services/wishing-list.service';

//import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  page: number = 1;
  pageSize: number = 3;
  // productsLength: number = 6;

  math = Math;

  

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

  searchProduct(search: any) {
    let searchedProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {

      searchedProducts = res.data.filter((product: any) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
      console.log(searchedProducts);
      this.products = searchedProducts;
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

  constructor(private ProductsService: ProductsService, private WishingListService: WishingListService) {}

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
  }

  addToWishList(prdId:any)
  {
    let id = {
      productId:prdId
    }
    this.WishingListService.addToList(id).subscribe(res=>{
      console.log(res)
    })
  }
  
}
