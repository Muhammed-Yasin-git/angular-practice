import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { User } from './components/user/user';
import { Dashboard } from './components/dashboard/dashboard';
import { Profile } from './components/dashboard/children/profile/profile';
import { Settings } from './components/dashboard/children/settings/settings';
import { NotFound } from './components/not-found/not-found';
import { Home } from './components/home/home';
import { authGuard } from './guards/auth-guard';
import { Login } from './components/login/login';
import { ProductSearch } from './components/product-search/product-search';
import { authChildGuard } from './guards/auth-child-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    },
    {
        path: 'counter',
        component: Counter
    },
    {
        path: 'user/:username',
        component: User
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate:[authChildGuard],

        children:[
            {
                path: 'profile',
                component: Profile
            },
            {
                path: 'settings',
                component: Settings
            }
        ]
    },
    {
        path:'product-search',
        component: ProductSearch
    },
    {path: '**', component: NotFound}
];
    