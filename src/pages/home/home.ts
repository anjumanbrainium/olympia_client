import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CompleteprogramPage} from '../../pages/completeprogram/completeprogram';
import {FatburningPage} from '../../pages/fatburning/fatburning';
import {AddinbodyPage} from '../../pages/addinbody/addinbody';
import {BodyresultPage} from '../../pages/bodyresult/bodyresult';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

  constructor(public navCtrl: NavController) {

  }
  completeProgram(param){
    let pages = [CompleteprogramPage,FatburningPage,BodyresultPage,AddinbodyPage];  
    this.navCtrl.push(pages[param]);   
  }


}
