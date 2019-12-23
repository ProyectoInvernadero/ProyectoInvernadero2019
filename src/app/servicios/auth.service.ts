import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(usuario: string, password: string) {

    return new Promise((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(usuario, password).then(res => {
        resolve(res);
      }).catch(err => reject(err));
    });

  }

  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  guardar(email: string, password: string, name: string, lastname: string, telefono: any, identificacion: any) {
    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res => {
          // console.log(res.user.uid);
        const uid = res.user.uid;
        this.db.collection('usuarios').doc(uid).set({
          email,
          name,
          lastname,
          identificacion,
          telefono,
          uid
          });
        resolve(res);
      }).catch( err => reject(err));
    });
  }
  recuperar(usuario: string) {
      this.AFauth.auth.sendPasswordResetEmail(usuario).then( () => {
        this.router.navigate(['/login']);
      });
  }
}
