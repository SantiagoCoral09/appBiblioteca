import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmLibrosComponent } from './components/Admin/adm-libros/adm-libros.component';
import { AdmPrestamosComponent } from './components/Admin/adm-prestamos/adm-prestamos.component';
import { AdmUsuariosComponent } from './components/Admin/adm-usuarios/adm-usuarios.component';
import { LibrosComponent } from './components/AllUsers/libros/libros.component';
import { LoginComponent } from './components/AllUsers/login/login.component';
import { ModificarComponent } from './components/AllUsers/modificar/modificar.component';
import { RegistroComponent } from './components/AllUsers/registro/registro.component';
import { ListarPedidosComponent } from './components/Clientes/listar-pedidos/listar-pedidos.component';
import { VerLibroComponent } from './components/Clientes/ver-libro/ver-libro.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'libros', component: LibrosComponent},
  {path:'verLibro/:id', component: VerLibroComponent},
  {path:'registro', component: RegistroComponent},
  {path:'modificar', component: ModificarComponent},

  {path:'adminLibros', component: AdmLibrosComponent},
  {path:'adminPrestamos', component: AdmPrestamosComponent},
  {path:'adminUsuarios', component: AdmUsuariosComponent},

  {path:'listarPedidos', component: ListarPedidosComponent},
  {path:'**',redirectTo:'',pathMatch:'full'} //ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
