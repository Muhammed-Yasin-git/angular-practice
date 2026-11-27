import { Component } from '@angular/core';
import { StudentCard } from '../student-card/student-card';
import { LabourCard } from '../labour-card/labour-card';
import { Registration } from '../registration/registration';

@Component({
  imports: [StudentCard, LabourCard, Registration],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  department   = "Computer Science"

  selectedStudent = '';

  receiveStudent(name: string){
    this.selectedStudent = name
  }

}
