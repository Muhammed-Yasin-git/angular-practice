import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { RegistrationTdf } from './components/registration-tdf/registration-tdf';
import { LoginReactive } from './components/login-reactive/login-reactive';

export const routes: Routes = [
    {
        path:'',
        component: Products
    },
    {
        path:'registration',
        component: RegistrationTdf
    },
    {
        path: 'login',
        component: LoginReactive
    }
];
