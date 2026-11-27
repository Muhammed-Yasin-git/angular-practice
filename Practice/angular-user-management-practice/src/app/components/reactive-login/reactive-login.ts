import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-reactive-login',
  styleUrl: './reactive-login.css',
  templateUrl: './reactive-login.html',
})
export class ReactiveLogin {
 
  login = new FormGroup({

    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])
  });

  onSubmit(){
    console.log("form sumitted")
    console.log(this.login.value)
  }
}
