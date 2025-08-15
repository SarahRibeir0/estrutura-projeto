import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {
  NzFormControlComponent,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';

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
    NzButtonModule,
    NzSelectModule,
    NzIconModule,
    NzSpinModule,
    NzDatePickerModule,
  ],
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss'],
})
export class UsuariosFormComponent implements OnInit {
  formUsuario!: UntypedFormGroup;
  isLoading: boolean = false;
  titleCard: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.initForm();
    const usuario = history.state.usuario;
    if (usuario) {
      this.titleCard = 'Editar Usuário';
      this.loadUsuarios(usuario);
    } else {
      this.titleCard = 'Cadastrar Usuário';
    }
    this.perfilMotorista();
  }

  private initForm() {
    this.formUsuario = new UntypedFormBuilder().group({
      nome: new UntypedFormControl(null, [Validators.required]),
      login: new UntypedFormControl(null, [Validators.required]),
      perfil: new UntypedFormControl(null, [Validators.required]),
      senha: new UntypedFormControl(null, [Validators.required]),
      cnh: new UntypedFormControl(null, [Validators.required]),
      categoria: new UntypedFormControl(null, [Validators.required]),
      validade: new UntypedFormControl(null, [Validators.required]),
    });
  }

  loadUsuarios(usuario: any) {
    this.isLoading = true;
    setTimeout(() => {
      this.formUsuario.patchValue({
        nome: usuario.nome,
        login: usuario.login,
        perfil: usuario.perfil,
        senha: usuario.senha,
        cnh: usuario.cnh,
        categoria: usuario.categoria,
        validade: usuario.validade,
      });
      this.isLoading = false;
    }, 1000);
  }

  salvar() {
    if (this.formUsuario.valid) {
      const usuario = this.formUsuario.value;
      console.log('Usuário cadastrado:', usuario);
      this.perfilMotorista();
    } else {
      console.log('Formulário inválido');
      Object.values(this.formUsuario.controls).forEach((control) => {
        control.markAsTouched();
        control.updateValueAndValidity();
      });
      return;
    }
  }

  btnCancelar() {
    this.router.navigate(['/usuarios']);
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  perfilMotorista() {
    this.formUsuario.get('perfil')?.valueChanges.subscribe((valor) => {
      if (valor === 'Motorista') {
        this.formUsuario.patchValue({
          cnh: null,
          categoria: null,
          validade: null,
        });
      }
    });
  }
}
