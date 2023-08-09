import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {  
name = '';
surname = '';
age: number = null;
mail = '';
summary = '';

isDisabled(){
  return this.name === '' || this.surname === '' ||this.mail === ''|| this.age === null;
}

print(){
  this.summary = `Imię i Nazwisko:${this.name} ${this.surname} Wiek:${this.age} E-mail:${this.mail}`
  this.name = '';
  this.surname = '';
  this.mail = '';
  this.age = null;

}

}
