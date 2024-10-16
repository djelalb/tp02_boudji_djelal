import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  clientForm: FormGroup;

  @Output() formSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      civilite: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      cp: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      ville: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      pays: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.formSubmit.emit(this.clientForm.value);
    }
  }
}
