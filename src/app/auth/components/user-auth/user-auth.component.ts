import { CoreService } from './../../../core/services/core.service';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss'],
})
export class UserAuthComponent {
  constructor(private loginService: LoginService, private coreService: CoreService) {}

  login = 'login';

  password = 'password';

  formSubmit(event: any) {
    this.loginService.submitHandler(event);
    return false;
  }
}
