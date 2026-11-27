import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  username = '';
  password = '';
  errorMessage = ''
  
  private router = inject(Router)
  private authService = inject(AuthService)

  login(){
    const success = this.authService.login(this.username,this.password)

    if(success){
      this.router.navigate(['/home'])
    }else{
      this.errorMessage = 'Invalid Username or password'
    }
  }
  
}
