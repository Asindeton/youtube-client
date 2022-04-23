import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
  private key = 'AIzaSyCTnAg-FEkVH0a1un3zHcvIediRUe-ATU4';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({ params: req.params.append('key', this.key) });
    return next.handle(authReq);
  }
}
