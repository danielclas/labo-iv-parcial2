import { Component, OnInit } from '@angular/core';
import { Materia } from '../models/materia';
import { NotifyService } from '../services/notify.service';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent implements OnInit {

  materiaSelected: Materia;
  materias: Materia[] = [];

  constructor(
    private notify: NotifyService,
    private repository: RepositoryService
  ) { }



  ngOnInit() {
    this.repository.getAll('materias').valueChanges({idField:'id'})
    .subscribe(
      res => {
        this.materias = [...res] as Materia[];
      }
    )
  }

  onMateriaClicked(materia){
    this.materiaSelected = this.materiaSelected == materia ? null : materia;
  }
}
