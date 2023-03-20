import { Component ,OnInit} from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import {ProductsService} from 'src/app/_services/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 
  products:IProduct[]=[]
  constructor(private ProductsService:ProductsService){

  }

  ngOnInit():void
  {
    this.ProductsService.getAllProducts().subscribe(res=>{
      this.products=res.data;

    })
  }
}
