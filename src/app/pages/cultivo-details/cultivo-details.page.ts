import { Component, OnInit } from '@angular/core';
import { CultivoI } from '../../models/cultivo.interface';
import { CultivoService } from '../../servicios/cultivo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-cultivo-details',
  templateUrl: './cultivo-details.page.html',
  styleUrls: ['./cultivo-details.page.scss'],
})
export class CultivoDetailsPage implements OnInit {
  cultivo: CultivoI = {
    tipo: '',
    cantidad: 0,
    ubicacion: '',
    fechaI: '',
    nombreE: '',
    humedadMax: 0,
    humedadMin: 0,
    oxigenoMax: 0,
    oxigenoMin: 0,
    temperaturaMax: 0,
    temperaturaMin: 0,
    phMax: 0,
    phMin: 0,
    nombreP: '',
    humedadMaxP: 0,
    humedadMinP: 0,
    oxigenoMaxP: 0,
    oxigenoMinP: 0,
    temperaturaMaxP: 0,
    temperaturaMinP: 0,
    phMaxP: 0,
    phMinP: 0
  };
  cultivoId = null;


  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private cultivoService: CultivoService, private loadingController: LoadingController

  ) { }

  ngOnInit() {
    this.cultivoId = this.route.snapshot.params['id']
    if (this.cultivoId) {
      this.loadCultivo();
    }
  }
  async loadCultivo() {
    const loading = await this.loadingController.create({
      message: 'Loading.....'
    });
    await loading.present();
    this.cultivoService.getCultivo(this.cultivoId).subscribe(res => {
      loading.dismiss();
      this.cultivo = res;
    });
  }
  async saveCultivo() {
    const loading = await this.loadingController.create({
      message: 'Saving.....'
    });
    await loading.present();

    if (this.cultivoId) {
      // Actualizar
      this.cultivoService.updateCultivo(this.cultivo, this.cultivoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/cultivo');
      })
    } else {
      // Agrega uno nuevo
      this.cultivoService.addCultivo(this.cultivo).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/cultivo');
      });
    }
  }
    onRemove(idCultivo: string) {
      this.cultivoService.removeCultivo(idCultivo);
    
  }

}
