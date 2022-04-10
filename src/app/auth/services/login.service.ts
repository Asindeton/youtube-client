import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  submitHandler(event: any) {
    console.log(event);
  }
}
