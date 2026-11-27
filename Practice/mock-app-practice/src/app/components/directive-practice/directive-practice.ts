import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-directive-practice',
  styleUrl: './directive-practice.css',
  templateUrl: './directive-practice.html',
})
export class DirectivePractice {
  employees = [
  { id: 1, name: 'Yasin', active: true },
  { id: 2, name: 'Arun', active: false },
  { id: 3, name: 'Rahul', active: true }
];

showEmployees = true;

toggleEmployees(){
  this.showEmployees = !this.showEmployees
}

}
