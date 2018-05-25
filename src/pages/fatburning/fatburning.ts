import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChecklistDescriptionPage } from '../../pages/checklist-description/checklist-description';

/**
 * Generated class for the FatburningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fatburning',
  templateUrl: 'fatburning.html',
})
export class FatburningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FatburningPage');
  }
  details(){
    this.navCtrl.push(ChecklistDescriptionPage);
  }

}
