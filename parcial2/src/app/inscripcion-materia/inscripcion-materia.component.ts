import { NotifyService } from './../services/notify.service';
import { RepositoryService } from './../services/repository.service';
import { Component, OnInit } from '@angular/core';
import { Materia } from '../models/materia';
import { User } from '../models/user';

@Component({
  selector: 'app-inscripcion-materia',
  templateUrl: './inscripcion-materia.component.html',
  styleUrls: ['./inscripcion-materia.component.css']
})
export class InscripcionMateriaComponent implements OnInit {

  materias: Materia[] = [];
  materiaSelected: Materia;
  alumnos: User[] = [];
  alumnosSelected: User[] = [];
  loading = false;

  constructor(
    private notify: NotifyService,
    private repository: RepositoryService
  ) { }

  ngOnInit(): void {
    this.repository.getAll('materias').valueChanges({idField:'id'})
    .subscribe(
      res => {
        this.materias = [...res] as Materia[];
      }
    )

    this.repository.getAll('users').valueChanges({idField: 'id'})
    .subscribe(
      res => {
        this.alumnos = ([...res] as User[]).filter(u => u.type == 'alumno');
      }
    )
  }

  onMateriaClicked(materia){
    this.materiaSelected = this.materiaSelected == materia ? null : materia;
  }

  onAlumnoClicked(alumno){
    if(!this.alumnosSelected.includes(alumno)){
      this.alumnosSelected.push(alumno);
    }else{
      this.alumnosSelected = this.alumnosSelected.filter(a => a != alumno);
    }
  }

  inscribirMateria(){
    this.loading = true;
    this.repository.update('materias', this.materiaSelected.id,{alumnos: this.alumnosSelected})
    .then(
      res => {
        this.notify.toastNotify('Materia actualizada', 'La materia fue actualizada correctamente');
        this.loading = false;
      }
    )
  }
}
