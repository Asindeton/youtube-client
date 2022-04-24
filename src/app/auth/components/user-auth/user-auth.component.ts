import { CoreService } from './../../../core/services/core.service';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss'],
})
export class UserAuthComponent {
  constructor(private loginService: LoginService, private coreService: CoreService) {
    this.createForm();
  }

  errorOnsubmit = false;

  loginForm!: FormGroup;

  formSubmit() {
    this.errorOnsubmit = true;
    if (!this.loginForm.valid) {
      return;
    }
    this.errorOnsubmit = false;
    this.loginService.submitHandler(this.loginForm.value);
  }

  private createForm() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.pattern(this.loginService.emailValidatorRegEx),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        this.loginService.passwordValidation('upperLowerCase'),
        this.loginService.passwordValidation('hasNumber'),
        this.loginService.passwordValidation('specialCharacter'),
      ]),
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
