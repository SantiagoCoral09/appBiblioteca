import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/AllUsers/login/login.component';
import { LibrosComponent } from './components/AllUsers/libros/libros.component';
import { RegistroComponent } from './components/AllUsers/registro/registro.component';
import { AdmLibrosComponent } from './components/Admin/adm-libros/adm-libros.component';
import { AdmPrestamosComponent } from './components/Admin/adm-prestamos/adm-prestamos.component';
import { AdmUsuariosComponent } from './components/Admin/adm-usuarios/adm-usuarios.component';
import { ListarPedidosComponent } from './components/Clientes/listar-pedidos/listar-pedidos.component';
import { ModificarComponent } from './components/AllUsers/modificar/modificar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarClienteComponent } from './components/Clientes/navbar-cliente/navbar-cliente.component';
import { VerLibroComponent } from './components/Clientes/ver-libro/ver-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LibrosComponent,
    RegistroComponent,
    AdmLibrosComponent,
    AdmPrestamosComponent,
    AdmUsuariosComponent,
    ListarPedidosComponent,
    ModificarComponent,
    NavbarClienteComponent,
    VerLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
