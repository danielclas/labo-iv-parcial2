import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Materia } from '../models/materia';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { NotifyService } from '../services/notify.service';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  profesor: any;

  constructor(
    private auth: AuthenticationService,
    private repository: RepositoryService,
    private notify: NotifyService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      cuatrimestre: ['', [Validators.required]],
      cupo: ['', [Validators.required]],
      año: ['', [Validators.required]]
    });
  }

  get nombre() { return this.form.get('nombre'); }
  get cuatrimestre() { return this.form.get('cuatrimestre'); }
  get cupo() { return this.form.get('cupo'); }
  get año() { return this.form.get('año'); }

  setProfesor(profesor: User){
    this.profesor =  this.profesor == profesor ? null : profesor;
  }

  alta(){
    this.loading = true;
    let obj: Materia = {
      nombre: this.nombre.value,
      cuatrimestre: this.cuatrimestre.value,
      cupo: this.cupo.value,
      profesor: this.profesor,
      año: this.año.value
    };

    this.repository.add('materias', obj).then(
      res => {
        this.notify.toastNotify('Materia agregada', 'La materia fue agregada correctamente');
        this.profesor = null;
        this.form.reset();
        this.loading = false;
      }
    )
  }

}
