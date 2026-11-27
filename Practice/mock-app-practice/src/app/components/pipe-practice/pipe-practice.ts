import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-pipe-practice',
  styleUrl: './pipe-practice.css',
  templateUrl: './pipe-practice.html',
})
export class PipePractice {
  userName = 'muhammed yasin';

  today = new Date();

  price = 2500;

  number = 12345.678
}
