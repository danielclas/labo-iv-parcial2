import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  usuarios: User[] = [];

  constructor(
    private repository: RepositoryService
  ) { }

  ngOnInit(): void {
    this.repository.getAll('users').valueChanges({idField: 'id'})
    .subscribe(
      res => this.usuarios = [...res] as User[]
    )
  }

}
