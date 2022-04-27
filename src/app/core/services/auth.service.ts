import { selectLogin } from './../../redux/selectors/login.selector';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { LoginAction } from 'src/app/redux/actions/login.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router: Router, private store: Store) {}

  nickname = this.store.select(selectLogin)
    ? localStorage.getItem('youtube-client')?.split(' - ')[0]
    : '';

  logout() {
    localStorage.removeItem('youtube-client');
    this.store.dispatch(LoginAction.logout());
    this.router.navigate(['/login']);
  }
}
