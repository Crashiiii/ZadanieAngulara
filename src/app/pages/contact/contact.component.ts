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
summary = '';

isDisabled(){
  return this.name === '' || this.surname === '' || this.age === null;
}

print(){
  this.summary = `${this.name} ${this.surname} ${this.age}`
  this.name = '';
  this.surname = '';
  this.age = null;

}

}
