import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicModule } from '@ionic/angular';
import { AddCultivoPage } from '../add-cultivo/add-cultivo.page'; // Esta Linea se Puede Borrar
import { CultivoI } from '../../models/cultivo.interface';
import { CultivoService } from '../../servicios/cultivo.service';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.page.html',
  styleUrls: ['./cultivo.page.scss'],
})
export class CultivoPage implements OnInit {
  cultivos: CultivoI[];
  constructor(public navCtrl: NavController, private cultivoService: CultivoService) {  

  }

  ngOnInit() {
    this.cultivoService.getCultivos().subscribe(res => this.cultivos = res);
  }
  navigateToAddCultivoPage(){
    this.navCtrl.navigateForward('/add-cultivo');
    
  }
}
