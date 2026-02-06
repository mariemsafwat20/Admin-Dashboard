import { Routes } from '@angular/router';
import { AdminLayout } from './Layouts/adminLayout/admin-layout';

export const routes: Routes = [
    {path: '', redirectTo: 'Layout', pathMatch: 'full' },
    { path: 'Layout', component: AdminLayout   }
];
