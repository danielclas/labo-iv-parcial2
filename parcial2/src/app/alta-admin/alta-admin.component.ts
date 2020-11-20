import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserType } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { NotifyService } from '../services/notify.service';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-alta-admin',
  templateUrl: './alta-admin.component.html',
  styleUrls: ['./alta-admin.component.css']
})
export class AltaAdminComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;


  constructor(
    private auth: AuthenticationService,
    private repository: RepositoryService,
    private notify: NotifyService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      type: ['', [Validators.required]]
    });

  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get type() { return this.form.get('type'); }

  alta(){
    this.loading = true;

    let user: User = {
      email: this.email.value.toLowerCase(),
      password: this.password.value,
      type: UserType.admin
    }

    this.auth.getSignInMethods(user.email).then(
      res => {
      if(res.length > 0){
        this.notify.toastNotify('Error dando el alta', 'Ya existe un usuario con ese correo');
      }else{
        this.auth.createUser(user.email, user.password, user.type).then(
          res => {
            this.notify.toastNotify('Usuario admin agregado', 'El usuario admin fue agregado correctamente');
            this.loading = false;
            this.form.reset();
          }
        )
      }
    });
  }

}
