import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // baseurl='http://localhost:8080/api/v1/orders' ;
  baseurl = 'https://ecommerce-api-6p26.onrender.com/api/v1/orders';
  ordersAddressUrl =
    'https://ecommerce-api-6p26.onrender.com/api/v1/addresses ';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // orders
      // Authorization:
      //   'Bearer ' +
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBmNDY2MjBlNTc4MTdiMDY4Zjk4ZTUiLCJpYXQiOjE2Nzg3Mjk1NTMsImV4cCI6MTY4NjUwNTU1M30.hF3wrJ2xL7E2JmQmwyo5oqu5U8vBR1sTMThd4_S0jt4',
      // shipping address
      'Authorization' : 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFlYzU5ODBhYTc2MTdmYTlmNmQyNTEiLCJpYXQiOjE2Nzk3NTY4OTgsImV4cCI6MTY4NzUzMjg5OH0.1h8ZJKE3A--rA7WLiLZzR5VZmQr-c_HROKB90oNCTPw'
      // 'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }),
  };

  constructor(public http: HttpClient) {}

  getOrders() {
    return this.http.get<any>(this.baseurl, this.httpOptions);
  }
  
  getSavedAddresses(){
    return this.http.get<any>(this.ordersAddressUrl, this.httpOptions);
    console.log(this.http.get<any>(this.ordersAddressUrl, this.httpOptions));
    
  }
  sendOrderAddress(alias: string, details: string, phone: string) {
    return this.http.post<any>(
      this.ordersAddressUrl,
      { alias, details, phone },
      this.httpOptions
    );
  }
}
