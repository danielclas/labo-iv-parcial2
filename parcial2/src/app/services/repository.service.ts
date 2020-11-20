import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage) { }

  getAll(collection: string){
    return this.firestore.collection(collection);
  }

  getOne(collection: string, uid: string){
    return this.firestore.collection(collection).doc(uid);
  }

  update(collection: string, uid: string, obj: {}){
    return this.firestore.collection(collection).doc(uid).update({...obj});
  }

  add(collection: string, obj: {}){
    return this.firestore.collection(collection).add({...obj});
  }

  delete(collection: string, uid: string){
    return this.firestore.collection(collection).doc(uid).delete();
  }
}
