import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import { ProductsService } from 'src/app/_services/products.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { WishingListService } from 'src/app/_services/wishing-list.service';
import { Router } from '@angular/router';

//import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  page: number = 1;
  pageSize: number = 4;
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
          if(product.category == null) return false;
        return product.category.name === category;
      });
      this.products = filteredProducts;
    });
  }

  searchProduct(search: any) {
    let searchedProducts = [];
    this.ProductsService.getAllProducts().subscribe((res) => {
      searchedProducts = res.data.filter((product: any) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
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
    private WishingListService: WishingListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((res) => {
      this.products = res.data;
      console.log(this.products);
    });

    this.ProductsService.getAllCategories().subscribe((res) => {
      this.categories = res.data;
      console.log(this.categories);
      for (let i = 0; i < this.categories.length; i++) {}
    });
  }

  addToWishList(prdId: any) {
    let id = {
      productId: prdId,
    };
    this.WishingListService.addToList(id).subscribe((res) => {});
  }

  productDetails(_id: any) {
    this.router.navigate(['/product-detail', _id]);
  }
}
