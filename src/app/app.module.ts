import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PaisPageModule } from '../pages/pais/pais.module';
import { ContinentePageModule } from '../pages/continente/continente.module';
import { PaisPage } from '../pages/pais/pais';
import { ContinentePage } from '../pages/continente/continente';
import { DestinoPageModule } from '../pages/destino/destino.module';
import {HttpModule} from "@angular/http";
import { PaisesProvider } from '../providers/paises/paises';
import { DatabaseProvider } from '../providers/database/database';
import { PaisProvider } from '../providers/pais/pais';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PaisPageModule,
    ContinentePageModule,
    DestinoPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaisPage,
    ContinentePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PaisesProvider,
    SQLite,
    DatabaseProvider,
    PaisProvider

  ]
})
export class AppModule {}
