import { AnimateGallery } from './../../animations';
import { NotifyService } from './../../services/notify.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [AnimateGallery]
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  loading: boolean = false;

  constructor(
      private notify: NotifyService,
      private formBuilder: FormBuilder,
      private router: Router,
      private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.SignOut();
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.login.get('email'); }
  get password() { return this.login.get('password'); }

  informError(){
    this.notify.toastNotify('Error registrando usuario', 'Ya existe un usuario con ese correo');
  }

  signIn() {
    this.loading = true;

    this.auth.getSignInMethods(this.email.value).then(
      res => {
        if(res.length > 0){
          this.auth.signIn(this.email.value, this.password.value).then(
            res => {
              setTimeout(() => {
                this.router.navigateByUrl('/home');
              }, 500);

              this.loading = false;
            },
            err => {
              this.notify.toastNotify('Error realizando el login', 'Hubo un error intentando ingresar a su cuenta. Intente más tarde');
              this.loading = false;
            }
          )
        }else{
          this.notify.toastNotify('Usuario inexistente', 'No existe un usuario con el correo <b>' + this.email.value + '</b>');
          this.loading = false;
        }
      }
    )
  }
}
