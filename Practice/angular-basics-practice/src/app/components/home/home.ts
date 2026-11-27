import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  imports: [RouterLink, RouterLinkActive,   ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
   private authService = inject(AuthService)  

  logout(){
    this.authService.logout()
  }
}
