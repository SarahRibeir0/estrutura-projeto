import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import {
  NzFormControlComponent,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-usuarios-form',
  standalone: true,
  imports: [
    NzCardModule,
    ReactiveFormsModule,
    NzFormLabelComponent,
    NzFormItemComponent,
    NzFormControlComponent,
    NzInputModule,
    NzColDirective,
    NzGridModule,
    NzButtonModule
  ],
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss'],
})
export class UsuariosFormComponent implements OnInit {
  formUsuario!: UntypedFormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.formUsuario = new UntypedFormBuilder().group({
      nome: new UntypedFormControl(null, [Validators.required]),
      login: new UntypedFormControl(null, [Validators.required]),
      perfil: new UntypedFormControl(null, [Validators.required]),
      senha: new UntypedFormControl(null, [Validators.required]),
    });
  }

  salvar(){
    if (this.formUsuario.valid) {
      const usuario = this.formUsuario.value;
      console.log('Usuário cadastrado:', usuario);
    } else {
      console.log('Formulário inválido');
    }
  }
}
