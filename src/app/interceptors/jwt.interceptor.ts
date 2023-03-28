import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../_services/auth.service";
import {environment} from "../../environments/environment";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // let user = this.authService.user;
    let user = this.authService.getUser();
    console.log(user?.token)
    let isLoggedIn = user && user?.token

    let isAppUrl = request.url.startsWith(`${environment.apiUrl}`);
    console.log('not')

    if (isLoggedIn && isAppUrl) {
      console.log('authorized')
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }

    return next.handle(request);
  }
}
