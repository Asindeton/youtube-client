import { AddCardService } from './../../services/add-card.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent {
  constructor(private addCardService: AddCardService, private coreService: CoreService) {
    this.createForm();
  }

  errorOnsubmit = false;

  addCardForm!: FormGroup;

  showResult = false;

  formSubmit() {
    this.errorOnsubmit = true;
    if (!this.addCardForm.valid) {
      return;
    }
    this.errorOnsubmit = false;
    console.table(this.addCardForm.value);
    this.showResult = true;
  }

  private createForm() {
    this.addCardForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [Validators.maxLength(255)]),
      imageCoverLink: new FormControl('', [
        Validators.required,
        Validators.pattern(this.addCardService.URL_REGEXP),
      ]),
      videoLink: new FormControl('', [
        Validators.required,
        Validators.pattern(this.addCardService.URL_REGEXP),
      ]),
      creationDate: new FormControl('', [
        Validators.required,
        this.addCardService.dateValidation(),
      ]),
    });
  }

  get title() {
    return this.addCardForm.get('title');
  }

  get description() {
    return this.addCardForm.get('description');
  }

  get imageCoverLink() {
    return this.addCardForm.get('imageCoverLink');
  }

  get videoLink() {
    return this.addCardForm.get('videoLink');
  }

  get creationDate() {
    return this.addCardForm.get('creationDate');
  }
}
