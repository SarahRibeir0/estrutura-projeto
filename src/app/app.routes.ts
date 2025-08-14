import { Routes } from '@angular/router';
import { Layout } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: HomeComponent },
      { path: 'usuarios',
        loadChildren: () => import('./pages/usuarios/usuarios.routes').then(m => m.usuariosRoutes)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];
