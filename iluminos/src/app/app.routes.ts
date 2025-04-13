import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'events',
    loadComponent: () => import('./components/events/events.component').then((m) => m.EventsComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
