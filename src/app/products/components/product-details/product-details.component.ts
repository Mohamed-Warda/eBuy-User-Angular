
import { Component ,EventEmitter,Input,OnInit, Output} from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import {ProductsService} from 'src/app/_services/products.service'
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  products:IProduct[]=[]
  @Input() quentity :number=1 ;
  // @Input() data: any ={}
  // @Output() item = new EventEmitter()

  constructor(private ProductsService:ProductsService, private cartService : CartService){

  }

  ngOnInit():void
  {
    this.ProductsService.getAllProducts().subscribe(res=>{
      this.products=res.data;
      console.log(this.products[0])
     
   

    })
    
   
  }
  addToCart(item:any){
  //  this.item.emit(this.data)
  }
}
