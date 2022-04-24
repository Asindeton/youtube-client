import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable, ApplicationRef } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private router: Router, private ref: ApplicationRef) {}

  isLoginObserver = new BehaviorSubject<boolean>(
    localStorage.getItem('youtube-client') !== null ? true : false,
  );

  nickname = this.isLoginObserver ? localStorage.getItem('youtube-client')?.split(' - ')[0] : '';

  logout() {
    localStorage.removeItem('youtube-client');
    this.isLoginObserver.next(false);
    this.router.navigate(['/login']);
  }

  getIsLoginState(): Observable<boolean> {
    return this.isLoginObserver;
  }
}
