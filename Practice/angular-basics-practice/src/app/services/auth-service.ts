import { inject, Injectable, } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})


export class AuthService {
    
    isLoggedIn = false;

    private router = inject(Router)

    private dummyUser = 'yasin';
    private dummyPass = '123'

    login(username: string , password: string): boolean{
        if(username === this.dummyUser && password === this.dummyPass){
            this.isLoggedIn = true;
            return true
        }
        return false
    }

    logout(){
        this.isLoggedIn = false
        this.router.navigate(['/login'])
    }
}
