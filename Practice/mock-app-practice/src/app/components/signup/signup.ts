import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-signup',
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {

  registrationForm = new FormGroup({
    userName  : new FormControl(''),
    email  : new FormControl(''),
    password  : new FormControl('')
  })

  onSubmit(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value)
    }
  }
}


// Bridgeon Reviewer
// 23:20
// Create two pages using two different Angular form approaches:
// 1. Login Page - using Template-Driven Forms
// - Fields: Email, Password
// - On submit, log the form data to the console
// 2. Signup Page - using Reactive Forms
// - Fields: Name, Email, Password
// - On submit, log the form data to the console
// No validation is required for this task - the focus is purely on correctly setting up and submitting
// each form using its respective appro