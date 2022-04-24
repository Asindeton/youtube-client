import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { first, Observable } from 'rxjs';
import { selectLogin } from 'src/app/redux/selectors/login.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let isLogin!: boolean;
    let isLogin$ = this.store.select(selectLogin);
    isLogin$.pipe(first()).subscribe((val) => (isLogin = val));
    if (isLogin) {
      if (url == '/login') {
        this.router.navigate(['/home']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
