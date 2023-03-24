import { Component, Input ,OnChanges, SimpleChanges} from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import { CartService } from 'src/app/_services/cart.service';
import {ProductsService} from 'src/app/_services/products.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  @Input() quentity :number=1 ;
  cartItems:any;
  cart:any;
  test:any[]=[];
  products:string[]=[] // save the ProId
  cartProducts:any[]=[] 
  allProducts:IProduct[]=[] // all product
  constructor(private CartService :CartService,private ProductsService:ProductsService){}
  ngOnInit():void
  {
  
      // Get all the products
      this.ProductsService.getAllProducts().subscribe(res=>{
        this.allProducts=res.data;
   
      })

      //get cart Items and Product Id in them
    this.CartService.getCart().subscribe(res=>{
      this.cartItems=res.data.cartItems;
      this.cart=res.data._id
     console.log(this.cart)

      for( let i =0 ; i<this.cartItems.length;i++){
        this.products[i]=(this.cartItems[i].product)
        
      }

     //get product properties form cart/products list
      this.cartProducts=this.allProducts.filter(o => this.cartItems.some((item: { product: String; }) => o._id === item.product ));
     //   console.log(this.cartProducts)
     
    })
      

  }
save(i:any,id:any){
  console.log(i.value)
  console.log(id)
 // this.ngOnInit();
}
 
  }


    
  




