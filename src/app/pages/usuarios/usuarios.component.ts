import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

interface Person {
  key: string;
  name: string;
  login: string;
  perfil: string;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, NzDividerModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'João Silva',
      login: 'joão.silva',
      perfil: 'Motorista',
    },
    {
      key: '2',
      name: 'Maria Santos',
      login: 'maria.santos',
      perfil: 'Administrador',
    },
    {
      key: '3',
      name: 'Carlos Oliveira',
      login: 'carlos.oliveira',
      perfil: 'Administrador',
    },
    {
      key: '3',
      name: 'Ana Costa',
      login: 'ana.costa',
      perfil: 'Administrador',
    },
    {
      key: '3',
      name: 'Roberto Lima',
      login: 'roberto.lima',
      perfil: 'Motorista',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
