import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // v1
  name = '';
  surname = '';
  age: number = null;
  mail = '';
  description = '';
  summary = '';

  // v2
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      descriptionn: ['', Validators.required],
      agee: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],

    })
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      alert('Dane zostały przesłane niedługo się odezwiemy')
      this.formGroup.reset();
      
    }
  }
  // v1
  onPrintClick() {
    this.summary = `Imię i Nazwisko:${this.name} ${this.surname} Wiek:${this.age} E-mail:${this.mail} Opis:${this.description} `
    this.name = '';
    this.surname = '';
    this.mail = '';
    this.age = null;
    this.description = '';
    alert('Dane zostały przesłane niedługo się odezwiemy')
  }
  // v1
  isDisabled() {
    return this.name === '' || this.surname === '' || this.mail === '' || this.description === '' || this.age === null;
  }
}
