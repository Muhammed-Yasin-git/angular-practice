import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { StudentCard } from './student-card/student-card';

@Component({
  imports: [Home, StudentCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
