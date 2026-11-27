import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './components/user-list/user-list';
// import { Counter } from './components/counter/counter';
// import { UserDetails } from './components/user-details/user-details';
// import { Login } from './components/login/login';
// import { ReactiveLogin } from './components/reactive-login/reactive-login';
// import { PipeDemo } from './components/pipe-demo/pipe-demo';

@Component({
  imports: [RouterOutlet, UserList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-user-management');
}
