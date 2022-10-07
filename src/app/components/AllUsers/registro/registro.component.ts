import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/Usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registrar: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrar = this.fb.group({
      cc:['',Validators.required],
      user:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required],
      direccion:['',Validators.required],
      email:['',Validators.required],
      nombre:['',Validators.required],
      password:['',Validators.required]      
    })
   }

  ngOnInit(): void {
  }

  registro(){
    console.log(this.registrar);

    const usuario:Usuarios={
      user: this.registrar.get('user')?.value,
      password: this.registrar.get('password')?.value,
      cc: this.registrar.get('cc')?.value,
      nombre: this.registrar.get('nombre')?.value,
      apellido: this.registrar.get('apellido')?.value,
      direccion: this.registrar.get('direccion')?.value,
      telefono: this.registrar.get('telefono')?.value,
      email: this.registrar.get('email')?.value,
    }
    console.log(usuario);
  }

}
