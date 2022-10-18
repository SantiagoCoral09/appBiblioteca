import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/Usuarios';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  
  modificar: FormGroup;

  constructor(private fb: FormBuilder) {
    this.modificar = this.fb.group({
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
    console.log(this.modificar);

    const usuario:Usuarios={
      user: this.modificar.get('user')?.value,
      password: this.modificar.get('password')?.value,
      cc: this.modificar.get('cc')?.value,
      nombre: this.modificar.get('nombre')?.value,
      apellido: this.modificar.get('apellido')?.value,
      direccion: this.modificar.get('direccion')?.value,
      telefono: this.modificar.get('telefono')?.value,
      email: this.modificar.get('email')?.value,
    }
    console.log(usuario);
  }

}
