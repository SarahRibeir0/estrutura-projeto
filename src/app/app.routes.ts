import { Layout } from './layout/layout.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
