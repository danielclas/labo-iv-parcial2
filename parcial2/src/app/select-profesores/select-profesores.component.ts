import { RepositoryService } from './../services/repository.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../models/user';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select-profesores',
  templateUrl: './select-profesores.component.html',
  styleUrls: ['./select-profesores.component.css']
})
export class SelectProfesoresComponent implements OnInit {

  list: User[] = [];

  @Output() selected = new EventEmitter();
  p: any;

  constructor(
    private repository: RepositoryService
  ) { }

  ngOnInit(): void {
    this.repository.getAll('users').valueChanges({idField: 'id'})
    .subscribe(
      res => {
        this.list = [...res] as User[];
        this.list = this.list.filter(u => u.type == 'profesor');
      }
    )
  }

  emitProfesor(item){
    if(this.p == item) this.p = null;
    else{
      this.p = item;
      this.selected.emit(item);
    }
  }

}
