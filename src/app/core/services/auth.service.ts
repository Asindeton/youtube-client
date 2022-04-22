import { Router } from '@angular/router';
import { Injectable, ApplicationRef } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private router: Router, private ref: ApplicationRef) {}

  isLogin = localStorage.getItem('youtube-client') !== null ? true : false;

  nickname = this.isLogin ? localStorage.getItem('youtube-client')?.split(' - ')[0] : '';

  logout() {
    localStorage.removeItem('youtube-client');
    this.isLogin = false;
    this.router.navigate(['/login']);
  }
}
