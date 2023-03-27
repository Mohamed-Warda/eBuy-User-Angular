import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { HomeModule } from './home/home.module';
import { NgbAlertModule, NgbModule, NgbPagination, NgbPaginationModule , } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './user/user.module';
import { OrdersModule } from './orders/orders.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
//import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,

    
 
    
  
        
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    HttpClientModule,
    NgbModule,
    CartModule,
    WishlistModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbPagination,
    UserModule,
    FormsModule,
    HomeModule,
    OrdersModule,
    ReactiveFormsModule
  


    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
