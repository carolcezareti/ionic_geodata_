import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pais } from '../../model/pais';
import { DestinoPage } from '../destino/destino';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pais: Pais[];
  public continente;

  constructor(public navCtrl: NavController) {

    var l1 = {nome:'África do Sul', continente:'Africa'};
    var l2 = {nome:'Angola', continente:'Africa'};
    var l3 = {nome:'Estados Unidos', continente:'América'};
    var l4 = {nome:'Brasil', continente:'América'};
    var l5 = {nome:'China', continente:'Asia'};
    var l6 = {nome:'Japão', continente:'Asia'};
    var l7 = {nome:'Espanha', continente:'Europa'}; 
    var l8 = {nome:'Reino Unido', continente:'Europa'};
    var l9 = {nome:'Austrália', continente:'Oceania'};  
    
    this.pais=[l1, l2, l3, l4, l5, l6, l7, l8, l9];
    this.continente=[];

  }

  irParaDestino(pais:Pais):void{
    this.navCtrl.push(DestinoPage, {paisSelecionado: pais});
    }

}
