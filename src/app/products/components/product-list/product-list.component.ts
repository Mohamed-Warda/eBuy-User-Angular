import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import { ProductsService } from 'src/app/_services/products.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';

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

  getProduct() {
    console.log(this.page);
  }

  products: IProduct[] = [];
  categories: IProduct[] = [];

  filterByCategory(category: any) {
    let filteredProducts =[];
    this.ProductsService.getAllProducts().subscribe((res) => {
      filteredProducts = res.data.filter((product: any) => {
        return product.category.name === category;
      });
      console.log(filteredProducts);
      this.products = filteredProducts;
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
