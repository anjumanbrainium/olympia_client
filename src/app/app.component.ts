import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Edit', component: EditprogramPage },
      { title: 'login', component: LoginPage },
      { title: 'Completeprogram', component: CompleteprogramPage },
      { title: 'Checklist-Description', component: ChecklistDescriptionPage },
      { title: 'Trainer-Dashboard', component: TrainerdashboardPage },
      { title: 'Trainer-View-Client', component: TrainerviewclientPage },
      { title: 'Add in body', component: AddinbodyPage },
      { title: 'Fat burning', component: FatburningPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
