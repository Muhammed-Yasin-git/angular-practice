import { Component, Input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-communication-child',
  styleUrl: './communication-child.css',
  templateUrl: './communication-child.html',
})
export class CommunicationChild {
  @Input() studentName: string = ''

  selected = output<string>();

  selectStudent(){
    this.selected.emit(this.studentName)
  }
}
