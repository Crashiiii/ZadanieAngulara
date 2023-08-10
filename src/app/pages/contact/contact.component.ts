import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      agee: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  submitForm() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }

  name = '';
  surname = '';
  age: number = null;
  mail = '';
  summary = '';

  isDisabled() {
    return this.name === '' || this.surname === '' || this.mail === '' || this.age === null;
  }

  print() {
    this.summary = `Imię i Nazwisko:${this.name} ${this.surname} Wiek:${this.age} E-mail:${this.mail}`
    this.name = '';
    this.surname = '';
    this.mail = '';
    this.age = null;
  }
}
