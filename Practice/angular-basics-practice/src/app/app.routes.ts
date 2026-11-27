import { Routes } from '@angular/router';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Dashboard } from './components/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';
import { Products } from './components/products/products';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path : 'signup',
        component: Signup
    },
    {
        path : 'login',
        component: Login
    },
    {
        path : 'home',
        component: Home,
        canActivate:[authGuard]
    },
    {
        path: 'dashboard/:username',
        component: Dashboard
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'products/:id',
        component: ProductDetails
    }
];
