import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  userName = ''
  email = ''
  password = ''

  onSumbit(form: any){
    console.log(form.value)
  }
}


//  Login Page - using Template-Driven Forms
// // - Fields: Email, Password
// // - On submit, log the form data to the console