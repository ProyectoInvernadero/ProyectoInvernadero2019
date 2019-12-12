import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public  name: string;
  public  lastname: string;
  public  identificacion: any;
  public  email: string;
  public  telefono: any;
  public  password: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  guardar() {
    this.auth.guardar(this.email, this.password, this.name, this.lastname, this.telefono, this.identificacion).then( auth => {
      this.router.navigate(['inicio']);
      console.log(auth);
    }).catch(err => console.log(err));
  }

}
