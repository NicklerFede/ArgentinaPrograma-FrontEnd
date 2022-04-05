import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    event.preventDefault();
    this.autenticacionService
      .IniciarSesion(this.form.value)
      .subscribe((data) => {
        console.log('DATA' + JSON.stringify(data));
        this.ruta.navigate;
      });
      this.ruta.navigate(['/administrador']);
  }
}
