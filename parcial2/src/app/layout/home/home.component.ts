import { AnimateGallery } from './../../animations';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [AnimateGallery]
})
export class HomeComponent implements OnInit {

  state: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url){
    this.state = 'buzz';
    setTimeout(() => {
      this.router.navigateByUrl(url);
    }, 500);
  }

}
