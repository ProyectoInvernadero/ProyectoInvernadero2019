import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';


@Component({
  selector: 'app-add-cultivo',
  templateUrl: './add-cultivo.page.html',
  styleUrls: ['./add-cultivo.page.scss'],
})

export class AddCultivoPage {

  arrData = []
  misCultivos
  

  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) { 
    this.fdb.list("/cultivos/").valueChanges().subscribe(_data =>{
      this.arrData = _data;

      console.log(this.arrData);
    });
    
  }

  ngOnInit() {
  }
  btnAddClicked(){
    this.fdb.list("/cultivos/").push(this.misCultivos);
  }
}
