import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ListadoMateriasComponent } from './listado-materias/listado-materias.component';
import { InscripcionMateriaComponent } from './inscripcion-materia/inscripcion-materia.component';
import { AltaMateriaComponent } from './alta-materia/alta-materia.component';
import { AltaAdminComponent } from './alta-admin/alta-admin.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alta-usuario', component: AltaUsuarioComponent},
  {path: 'alta-admin', component: AltaAdminComponent},
  {path: 'alta-materia', component: AltaMateriaComponent},
  {path: 'inscripcion-materia', component: InscripcionMateriaComponent},
  {path: 'listado-materias', component: ListadoMateriasComponent},
  {path: 'listado-usuarios', component: ListadoUsuariosComponent},
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
