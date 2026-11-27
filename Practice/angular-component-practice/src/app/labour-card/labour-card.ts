import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-labour-card',
  styleUrl: './labour-card.css',
  templateUrl: './labour-card.html',
})
export class LabourCard {
  isRegistered = true;

  toggleRegistered(){
    this.isRegistered = !this.isRegistered

  }
     workers = ['Yasin', 'Rahul', 'Arun', 'Abin'];
}
