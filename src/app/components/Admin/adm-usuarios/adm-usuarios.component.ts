import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/Usuarios';

@Component({
  selector: 'app-adm-usuarios',
  templateUrl: './adm-usuarios.component.html',
  styleUrls: ['./adm-usuarios.component.css']
})
export class AdmUsuariosComponent implements OnInit {
  usuariosRegistrados: Usuarios [] = [
    {
      cc:1023568987,
      nombre:'Lucia',
      apellido:'Ramírez',
      direccion:'cra 19 No 2-5',
      email:'luciaramirez@gmail.com',
      telefono:3256897878,
      password:'luci1234',
      user:'lucirmz'
    },
    {
      cc:10886597666,
      nombre:'Marco',
      apellido:'Enriquez',
      direccion:'cra 21 No 3-5',
      email:'marcoe@gmail.com',
      telefono:3259874653,
      password:'marco',
      user:'marcoenz'
    },
    {
      cc:1088125659,
      nombre:'Sandra',
      apellido:'Arteaga',
      direccion:'cra 01 No 12-46',
      email:'sandra@gmail.com',
      telefono:3021568978,
      password:'sandra1212',
      user:'sandra'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
