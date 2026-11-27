import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-registration-tdf',
  styleUrl: './registration-tdf.css',
  templateUrl: './registration-tdf.html',
})
export class RegistrationTdf {
  userName = ''
  email = ''
  age = 0
  password = ''

  onSubmit(form: any){
    console.log(form.value)

    form.resetForm()
  }
}
