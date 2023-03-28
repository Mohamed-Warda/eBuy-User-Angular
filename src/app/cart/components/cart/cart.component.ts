import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import { CartService } from 'src/app/_services/cart.service';
import { ProductsService } from 'src/app/_services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  
  @Input() quentity :number=1 ;
  cartItems:any;
  cart:any;
  test:any[]=[];
  products:string[]=[] // save the ProId
  cartProducts:any[]=[] 
  allProducts:IProduct[]=[] // all product
  error :string='';
  couponApplied:boolean=false;
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
      this.cart=res.data

      for (let i = 0; i < this.cartItems.length; i++) {
        this.products[i] = this.cartItems[i].product;
      }

     //get product properties form cart/products list
      this.cartProducts=this.allProducts.filter(o => this.cartItems.some((item: { product: String; }) => o._id === item.product ));
     //   console.log(this.cartProducts)
     
    })
      

  }
save(itemID:any,quantity:any){
  this.CartService.updateItemQuantity(itemID,quantity).subscribe(res=>{
  this.ngOnInit();

  })
}
deleteItem(itemId:string){
this.CartService.deleteByID(itemId).subscribe(res=>{
  this.ngOnInit();

})
}

addCoupon(coupon:string)
{
  this.CartService.applyCoupon(coupon).subscribe((res)=>{
    this.error='';
this.couponApplied=true;
this.ngOnInit();


  },(err)=>{
    this.error=err.message;
    console.log(err.status)
    
this.couponApplied=false;
    this.ngOnInit();
  })
}


  }

    
  




