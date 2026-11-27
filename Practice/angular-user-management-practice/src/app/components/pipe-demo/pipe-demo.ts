import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-pipe-demo',
  styleUrl: './pipe-demo.css',
  templateUrl: './pipe-demo.html',
})
export class PipeDemo {
  userName = 'muhammed yasin'

  today = new Date();

  price = 2500;

  percentage = 0.75;

  amount = 12345.678
}
