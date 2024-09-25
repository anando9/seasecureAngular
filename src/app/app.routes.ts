import { Route, Routes } from '@angular/router';

export const routes: Route[] = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)},
    { path: 'about',  loadComponent: () => import('./pages/about/about.component').then(mod => mod.AboutComponent)},
    { path: 'contact',  loadComponent: () => import('./pages/contact/contact.component').then(mod => mod.ContactComponent)},
    { path: 'login',  loadComponent: () => import('./pages/login/login.component').then(mod => mod.LoginComponent)},
    { path: '**', redirectTo: '/home' }  // Wildcard route for 404
  ];
