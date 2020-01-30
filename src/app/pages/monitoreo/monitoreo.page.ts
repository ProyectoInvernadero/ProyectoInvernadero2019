import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CultivoI } from '../../models/cultivo.interface';
import { CultivoService } from '../../servicios/cultivo.service';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.page.html',
  styleUrls: ['./monitoreo.page.scss'],
})
export class MonitoreoPage implements OnInit {
  myDate: any ;
  cultivos: CultivoI[];
  constructor(public navCtrl: NavController, private cultivoService: CultivoService) {
    this.myDate = "12:25:09";
  }

  ngOnInit() {
    this.cultivoService.getCultivos().subscribe(res => this.cultivos = res);
  }

}