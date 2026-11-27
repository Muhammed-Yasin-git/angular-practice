import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule ],
  selector: 'app-form-practice',
  styleUrl: './form-practice.css',
  templateUrl: './form-practice.html',
})
export class FormPractice {

  login = new FormGroup({
    name: new FormControl('',[
      Validators.required,
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])
  })

  onSubmit(){
    console.log(this.login.value)
  }
}
