import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaisesProvider } from '../../providers/paises/paises';

/**
 * Generated class for the PaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pais',
  templateUrl: 'pais.html',
  providers:[
    PaisesProvider
  ]
})
export class PaisPage {

  public pais: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private countriesProvider: PaisesProvider) {
    this.pais = this.navParams.get('pais');
  }

  ionViewDidLoad() {
  }

}
