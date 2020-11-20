import { RepositoryService } from './repository.service';
import { User, UserType } from './../models/user';
import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import {} from './collections';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: User = null;
  userData: Observable<any>;
  userAsigned = new EventEmitter<User>();

  constructor(
    private repository: RepositoryService,
    private auth: AngularFireAuth) {

    this.userData = auth.authState;
    this.userData.subscribe(res => {
      if(res && res.uid) this.asignToCurrentUser(res.uid);
      else this.currentUser = undefined;
    });
  }

  asignToCurrentUser(uid: string){
    this.repository.getAll('users').valueChanges()
    .subscribe(
      res => {
        let users = [...res] as User[];
        this.currentUser = users.find(u => u.id == uid);
        this.userAsigned.emit(this.currentUser);
      }
    )
  }

  getSignInMethods(email: string){
    return this.auth.fetchSignInMethodsForEmail(email);
  }

  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        this.repository.getAll('users').valueChanges({idField: 'id'})
        .subscribe(
          res => {
            let users = [...res] as User[];
            this.currentUser = users.find(u => u.email == email && u.password == u.password);
            this.userAsigned.emit(this.currentUser);
          }
        )
      }
    );
  }

  getCurrentUser(){
    return this.currentUser;
  }

  SignOut() {
    this.userAsigned.emit(null);
    this.currentUser = null;
    return this.auth.signOut().then(res => {
      this.currentUser = null;
      this.userAsigned.emit(null);
    });
  }

  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  createUser(email: string, password: string, type: any){
    let user = this.currentUser;

    return this.auth.createUserWithEmailAndPassword(email, password).then(
      res => {
        return this.addUserToCollection(email, password, type, res.user.uid);
      }
    )
  }

  addUserToCollection(email: string, password: string, type: string, id: string){
    return this.repository.add('users', {email, password, type, id});
  }
}
