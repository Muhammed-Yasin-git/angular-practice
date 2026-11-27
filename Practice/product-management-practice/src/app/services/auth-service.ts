import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn : 'root'
})

export class AuthService {

    private router = inject(Router)

    isLoggedIn = false;

    dummyUser = 'yasin'
    dummyPass = '123'

    login(username: string , password: string) {
        if(username == this.dummyUser && password == this.dummyPass){
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
