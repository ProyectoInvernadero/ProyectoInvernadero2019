import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  Ingresar() {
    this.authService.login(this.usuario, this.password).then(res => {
      this.router.navigate(['/inicio']);
    }).catch(err => alert('los datos son incorrectos'));
  }
  recuperarContrasena(usuario: string) {
    firebase.auth().sendPasswordResetEmail(usuario).then(function() {
      const alert = this.alertCtrl.create({
        title: 'correcto',
        subTitle: 'datos enviados',
        buttons: ['ok']
      });
      alert.present();
    }).catch(function(error) {
      const alert = this.alertCtrl.create({
        title: 'error',
        subTitle: 'datos no fueron enviados',
        buttons: ['ok']
      });
      alert.present();
    });
  }

}
