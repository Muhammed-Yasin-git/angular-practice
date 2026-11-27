import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  username = '';
  password = '';

  private router = inject(Router)

  private authService = inject(AuthService)

  login(){
    const success = this.authService.login(this.username,this.password)

    if(success){
      this.router.navigate(['/home'])
    }else{
      alert("Invalid Credentials")
    }
  }
}
