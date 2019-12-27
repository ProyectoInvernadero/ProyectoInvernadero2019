import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {
  usuario: string;
  constructor(private auth: AuthService, public router: Router) { }

  ngOnInit() {
  }
  recuperar() {
    this.auth.recuperar(this.usuario);
  }
}
