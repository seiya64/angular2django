import { RouterModule, Routes } from '@angular/router';

import { FortComponent } from './Fort/fort.component';
import { LoginComponent } from './Login/login.component';

const appRoutes: Routes = [
    {
        path: 'fort',
        component: FortComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

export const AppRouting = RouterModule.forRoot(appRoutes);