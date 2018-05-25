import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainerdashboardPage } from './trainerdashboard';

@NgModule({
  declarations: [
    TrainerdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainerdashboardPage),
  ],
})
export class TrainerdashboardPageModule {}
