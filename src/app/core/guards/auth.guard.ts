import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let isLogin!: boolean;
    this.authService.getIsLoginState().subscribe((val) => (isLogin = val));
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