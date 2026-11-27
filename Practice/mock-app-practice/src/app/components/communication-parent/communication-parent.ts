import { Component } from '@angular/core';
import { CommunicationChild } from '../communication-child/communication-child';

@Component({
  imports: [CommunicationChild],
  selector: 'app-communication-parent',
  styleUrl: './communication-parent.css',
  templateUrl: './communication-parent.html',
})
export class CommunicationParent {
  studentName = 'Alexander';

  selectedStudent = '';

  onStudentSelected(name: string) {
    this.selectedStudent = name;
  }
}
