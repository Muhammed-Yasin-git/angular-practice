import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-student-profile',
  styleUrl: './student-profile.css',
  templateUrl: './student-profile.html',
})
export class StudentProfile {

  studentname = 'Muhammed Yasin';
  age = 22;
  isDisabled = false;

  message = 'Hello Yasin'

  changeMessage(){
    this.message = 'Welcome Yasin Nice to meet you!!'
  }

}
