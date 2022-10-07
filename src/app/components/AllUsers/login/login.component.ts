import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inicioSesion } from 'src/app/interfaces/inicioSesion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iniciarSesion: FormGroup;

  constructor(private fb: FormBuilder) {
    this.iniciarSesion = this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]      
    })
   }


  ngOnInit(): void {
  }

  loggear(){
    console.log(this.iniciarSesion);

    const login:inicioSesion={
      user: this.iniciarSesion.get('user')?.value,
      password: this.iniciarSesion.get('password')?.value
    }
    console.log(login);
  }


}
