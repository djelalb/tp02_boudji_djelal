import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  client: any = {
    civilite: '',
    nom: '',
    prenom: '',
    adresse: '',
    cp: '',
    ville: '',
    tel: '',
    email: '',
    login: '',
    password: '',
    pays: ''
  };

  @Output() formSubmit = new EventEmitter<any>();

  isValidPostalCode(cp: string): boolean {
    const postalCodePattern = /^[0-9]{5}$/;
    return postalCodePattern.test(cp);
  }

  isValidPhoneNumber(tel: string): boolean {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(tel);
  }

  onSubmit() {
    if (this.isValidForm()) {
      this.formSubmit.emit(this.client);
    }
  }

  isValidForm(): boolean {
    return this.client.civilite && this.client.nom && this.client.prenom &&
           this.client.adresse && this.isValidPostalCode(this.client.cp) &&
           this.client.ville && this.isValidPhoneNumber(this.client.tel) &&
           this.client.email && this.client.login && this.client.password.length >= 6 &&
           this.client.pays;
  }
}