import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';

export const usuariosRoutes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
  },
  {
    path: 'cadastrar',
    component: UsuariosFormComponent,
  },
  {
    path: 'editar/:id',
    component: UsuariosFormComponent,
  },
];
