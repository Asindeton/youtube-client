import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class AddCardService {
  // See valid URLs in RFC3987 (http://tools.ietf.org/html/rfc3987)
  public URL_REGEXP =
    /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

  dateValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == '') {
        return null;
      }
      const now = new Date();
      if (new Date(control.value) < now) {
        return { dateValid: { value: control.value } };
      }
      return null;
    };
  }
}
