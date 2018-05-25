import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EditprogramPage } from '../pages/editprogram/editprogram';
import { LoginPage } from '../pages/login/login';
import { CompleteprogramPage } from '../pages/completeprogram/completeprogram';
import { ChecklistDescriptionPage } from '../pages/checklist-description/checklist-description';
import { TrainerdashboardPage } from '../pages/trainerdashboard/trainerdashboard';
import { TrainerviewclientPage } from '../pages/trainerviewclient/trainerviewclient';
import { AddinbodyPage } from '../pages/addinbody/addinbody';
import { FatburningPage } from '../pages/fatburning/fatburning';
import { BodyresultPage } from '../pages/bodyresult/bodyresult';









import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EditprogramPage,
    LoginPage,
    CompleteprogramPage,
    ChecklistDescriptionPage,
    TrainerdashboardPage,
    TrainerviewclientPage,
    AddinbodyPage,
    FatburningPage,
    BodyresultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EditprogramPage,
    LoginPage,
    CompleteprogramPage,
    ChecklistDescriptionPage,
    TrainerdashboardPage,
    TrainerviewclientPage,
    AddinbodyPage,
    FatburningPage,
    BodyresultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
