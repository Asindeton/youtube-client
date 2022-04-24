import { Store } from '@ngrx/store';
import { ILoginResult } from './model/login.model';
import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginAction } from 'src/app/redux/actions/login.actions';

@Injectable()
export class LoginService {
  constructor(private authService: AuthService, private router: Router, private store: Store) {}

  emailValidatorRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  passwordHasUpperCaseAndLowerCaseRegEX = /(?=.*[a-z])(?=.*[A-Z])/;

  passwordHasNumberRegEX = /(?=.*\d)/;

  passwordHasSpecialCharacterResultRegEX = /[-+_!@#$%^&*.,?]/;

  submitHandler(result: ILoginResult) {
    const { login, password } = result;
    localStorage.setItem('youtube-client', `${login} - ${password}`);
    this.authService.nickname = login;

    this.store.dispatch(LoginAction.login());
    this.router.navigate(['home']);
  }

  passwordValidation(validation: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == '') {
        return null;
      }
      switch (validation) {
        case 'upperLowerCase':
          const upperLowerCaseResult = this.passwordHasUpperCaseAndLowerCaseRegEX.test(
            control.value,
          );
          return upperLowerCaseResult
            ? null
            : { haveUpperCaseAndLowerCase: { value: control.value } };
        case 'hasNumber':
          const hasNumberResult = this.passwordHasNumberRegEX.test(control.value);
          return hasNumberResult ? null : { hasNumber: { value: control.value } };
        case 'specialCharacter':
          const hasSpecialCharacterResult = this.passwordHasSpecialCharacterResultRegEX.test(
            control.value,
          );
          return hasSpecialCharacterResult ? null : { specialCharacter: { value: control.value } };
        default:
          return null;
      }
    };
  }
}
