import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private authService: AuthService, private router: Router) {}

  submitHandler(event: any) {
    const { login, password } = event.target.elements;
    localStorage.setItem('youtube-client', `${login.value} - ${password.value}`);
    this.authService.isLoginObserver.next(true);
    this.authService.nickname = login.value;

    this.router.navigate(['home']);
  }
}
