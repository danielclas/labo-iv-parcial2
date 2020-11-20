import { Injectable } from '@angular/core';
// import { AngularBootstrapToastsService } from 'angular-bootstrap-toasts';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  options = {
    showProgressLine: true,
    pauseDurationOnMouseEnter: true,
    bodyClass: 'toastText',
    duration: 5000
  }

  constructor(
    ) { }

  toastNotify(title: string, text: string){
    // this.toast.showSimpleToast({title, text, ...this.options});
    alert(title + text);
  }
}
