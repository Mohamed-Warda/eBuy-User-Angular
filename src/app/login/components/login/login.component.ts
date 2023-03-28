import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthService} from "../../../_services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFormElm!: FormGroup;

  constructor(private fb: FormBuilder, private toaster: ToastrService, private router: Router, private authService: AuthService) {
    this.loginFormElm = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.loginFormElm.get('email');
  }

  get password() {
    return this.loginFormElm.get('password');
  }

  login() {
    if (this.loginFormElm.invalid)
      return;

    const observer = {
      next: (result: any) => {
        localStorage.setItem('token', result?.token);
        localStorage.setItem('user', JSON.stringify(result?.data));
        this.authService.setupUserProfile();
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.toaster.error('invalid email or password.');
      }
    }

    this.authService.login(this.loginFormElm.value).subscribe(observer);
  }
}
