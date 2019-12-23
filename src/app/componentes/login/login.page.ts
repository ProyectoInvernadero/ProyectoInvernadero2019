import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

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

}
