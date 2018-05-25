import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChecklistDescriptionPage } from './checklist-description';

@NgModule({
  declarations: [
    ChecklistDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ChecklistDescriptionPage),
  ],
})
export class ChecklistDescriptionPageModule {}
