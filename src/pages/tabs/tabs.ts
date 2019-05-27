import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tabs } from "ionic-angular";
import {ProgramPage} from "../program/program";
import {PlayPage} from "../play/play";
import {ConnectionPage} from "../connection/connection";
import {ConnectionProvider} from "../../providers/connection/connection";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

    connectionTab = ConnectionPage;
    playTab = PlayPage;
    programTab = ProgramPage;
    connection: ConnectionProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams, public connectionProvider: ConnectionProvider) {
      this.connection = connectionProvider;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
