import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

interface Person {
  key: number;
  nome: string;
  login: string;
  perfil: string;
  senha: string;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    NzDividerModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzTooltipModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: 1,
      nome: 'João Silva',
      login: 'joão.silva',
      perfil: 'Motorista',
      senha: '********',
    },
    {
      key: 2,
      nome: 'Maria Santos',
      login: 'maria.santos',
      perfil: 'Administrador',
      senha: '********',
    },
    {
      key: 3,
      nome: 'Carlos Oliveira',
      login: 'carlos.oliveira',
      perfil: 'Administrador',
      senha: '********',
    },
    {
      key: 4,
      nome: 'Ana Costa',
      login: 'ana.costa',
      perfil: 'Administrador',
      senha: '********',
    },
    {
      key: 5,
      nome: 'Roberto Lima',
      login: 'roberto.lima',
      perfil: 'Motorista',
      senha: '********',
    },
  ];

  constructor(private router: Router, private modal: NzModalService) {}

  ngOnInit() {}

  cadastrarUsuario() {
    this.router.navigate(['/usuarios/cadastrar']);
  }

  editUsuario(usuario: Person) {
    console.log(usuario);
    this.router.navigate(['/usuarios/editar/', usuario.key], {
      state: { usuario },
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Deseja excluir usuário?',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancelar')
    });
  }
}
