import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( public authservice: AuthService, public menuCtrl: MenuController) { }

  cerrarSesion() {
    this.authservice.logout();
    this.menuCtrl.close();
  }

  ngOnInit() {}

}
