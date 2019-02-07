import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SensoresPage } from '../sensores/sensores';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Sensor1(){
    this.navCtrl.push(SensoresPage)
  }
}
