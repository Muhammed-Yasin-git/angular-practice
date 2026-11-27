import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  imports: [RouterLink ,RouterLinkActive],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  private authService = inject(AuthService)

  get isLoggedIn(){
    return this.authService.isLoggedIn
  }

  logout(){
    this.authService.logout()
  }
}
