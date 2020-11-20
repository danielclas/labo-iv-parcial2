import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faDoorOpen, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  icon: IconDefinition = faDoorOpen;
  git: IconDefinition = faGithub;
  user: User;

  constructor(
    public auth: AuthenticationService,
    private router: Router){}

  ngOnInit(): void {
    this.auth.userAsigned.subscribe(
      user => this.user = user
    );
  }

  onLogOutClicked(){
    this.auth.SignOut().then(res => this.router.navigateByUrl('/login'));
  }
}
