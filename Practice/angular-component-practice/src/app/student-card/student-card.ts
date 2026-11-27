import { Component, OnInit ,Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-student-card',
  styleUrl: './student-card.css',
  templateUrl: './student-card.html',
})
export class StudentCard implements OnInit  {
  ngOnInit(): void {
    console.log("hi")
  }
  studentName = "Yasin";

  selected = output<string>();

  selectStudent() {
    this.selected.emit(this.studentName)
  }


  age = 22;
  isDisabled = true; 
  
  message = "wait for the click"
  
  changeMessage() {
    this.message = "botton clicked"
  }
  @Input() department = ''


}
