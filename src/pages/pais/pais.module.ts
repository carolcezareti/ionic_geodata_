import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisPage } from './pais';

@NgModule({
  declarations: [
    PaisPage,
  ],
  imports: [
    IonicPageModule.forChild(PaisPage),
  ],
})
export class PaisPageModule {
  public lista_paises = new Array<any>();

  (click)="irParaDestino(livro)"> ionViewDidLoad() {
    this.paisesProvider.getPaisesProvider().subscribe(
    data => {
    const response = (data as any);
    const objeto_retorno = JSON.parse(response._body);
    this.lista_filmes = objeto_retorno.results;
    console.log(objeto_retorno);
    }, error => {
    console.log(error);
    }
    )
}
