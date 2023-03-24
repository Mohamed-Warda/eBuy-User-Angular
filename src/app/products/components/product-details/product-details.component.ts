
import { Component ,OnInit} from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import {ProductsService} from 'src/app/_services/products.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  products:IProduct[]=[]
  constructor(private ProductsService:ProductsService){

  }

  ngOnInit():void
  {
    this.ProductsService.getAllProducts().subscribe(res=>{
      this.products=res.data;
      console.log(this.products[0])
     
   

    })
  }
}
