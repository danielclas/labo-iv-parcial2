import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { BackArrowComponent } from './layout/back-arrow/back-arrow.component';
import { AltaAdminComponent } from './alta-admin/alta-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaMateriaComponent } from './alta-materia/alta-materia.component';
import { SelectProfesoresComponent } from './select-profesores/select-profesores.component';
import { InscripcionMateriaComponent } from './inscripcion-materia/inscripcion-materia.component';
import { ListadoMateriasComponent } from './listado-materias/listado-materias.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    AltaUsuarioComponent,
    BackArrowComponent,
    AltaAdminComponent,
    AltaMateriaComponent,
    SelectProfesoresComponent,
    InscripcionMateriaComponent,
    ListadoMateriasComponent,
    ListadoUsuariosComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
