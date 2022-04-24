import { AdminAction } from './../../../redux/actions/admin.action';
import { Store } from '@ngrx/store';
import { AddCardService } from './../../services/add-card.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent {
  constructor(private addCardService: AddCardService, private store: Store) {
    this.createForm();
  }

  errorOnsubmit = false;

  addCardForm!: FormGroup;

  formSubmit() {
    this.errorOnsubmit = true;
    if (!this.addCardForm.valid) {
      return;
    }
    this.errorOnsubmit = false;
    this.store.dispatch(AdminAction.addCard({ card: this.addCardForm.value }));
    this.addCardForm.reset();
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
