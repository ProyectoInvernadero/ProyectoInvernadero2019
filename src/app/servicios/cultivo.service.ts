import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CultivoI } from '../models/cultivo.interface';

@Injectable({
  providedIn: 'root'
})
export class CultivoService {
  private cultivosCollection: AngularFirestoreCollection<CultivoI>;
  private cultivos: Observable<CultivoI[]>;

  constructor(db: AngularFirestore) {
    this.cultivosCollection = db.collection<CultivoI>('cultivos');
    this.cultivos = this.cultivosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
   }
   getCultivos() {
     return this.cultivos;
   }
   getCultivo(id: string) {
     return this.cultivosCollection.doc<CultivoI>(id).valueChanges();
   }

   updateCultivo(cultivo: CultivoI, id: string) {
     return this.cultivosCollection.doc(id).update(cultivo);
   }

   addCultivo(cultivo: CultivoI) {
     return this.cultivosCollection.add(cultivo);
   }

   removeCultivo(id: string) {
     return this.cultivosCollection.doc(id).delete();
   }
}
