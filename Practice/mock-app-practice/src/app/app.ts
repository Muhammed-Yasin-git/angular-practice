import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentProfile } from './components/student-profile/student-profile';
import { CommunicationParent } from './components/communication-parent/communication-parent';
import { DirectivePractice } from './components/directive-practice/directive-practice';
import { FormPractice } from './components/form-practice/form-practice';
import { PipePractice } from './components/pipe-practice/pipe-practice';
import { ProductList } from './components/product-list/product-list';

@Component({
  imports: [ProductList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mock-app');
}
