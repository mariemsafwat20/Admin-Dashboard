import { Routes } from '@angular/router';
import { AdminLayout } from './Layouts/adminLayout/admin-layout';
import { Dashboard } from './Components/dashboard/dashboard';

export const routes: Routes = [
    // Redirect empty path to 'dashboard' directly
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    // Admin layout with children routes
    { 
        path: '', 
        component: AdminLayout, 
        children: [
        { path: 'dashboard', component: Dashboard },
        ]
    },

    // Optional: wildcard route for 404
    { path: '**', redirectTo: 'dashboard' }
];
