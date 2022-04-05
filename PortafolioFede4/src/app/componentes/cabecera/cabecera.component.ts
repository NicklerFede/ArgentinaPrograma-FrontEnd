import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit { 
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
    username:['',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]],
    password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
    })
  }
  ngOnInit(): void {}
}
