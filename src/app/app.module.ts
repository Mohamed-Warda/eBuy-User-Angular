import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import {CartModule} from './cart/cart.module';
import {WishlistModule} from './wishlist/wishlist.module';
import {HomeModule} from './home/home.module';
import {
  NgbAlertModule,
  NgbModule,
  NgbPagination,
  NgbPaginationModule,
  NgbAccordion,
  NgbPanel
} from '@ng-bootstrap/ng-bootstrap';
import {UserModule} from './user/user.module';
import {FormsModule} from '@angular/forms';
import {OrdersModule} from './orders/orders.module';
import {CheckoutModule} from './checkout/checkout.module';
import {LoginModule} from "./login/login.module";
import { RegisterModule } from './register/register.module';




import {MainComponent} from './main/main.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {httpInterceptorsProviders} from "./interceptors";


//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
//import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
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
    NgbAccordion,
    NgbPanel,
    CheckoutModule,
    LoginModule,
    RegisterModule,








    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorsProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
