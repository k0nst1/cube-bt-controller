import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConnectionProvider} from "../../providers/connection/connection";

/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-play',
    templateUrl: 'play.html',
})
export class PlayPage {
    public connectionProvider: ConnectionProvider;
    public triggerAutomatically: boolean = true;
    transferSucceeded: boolean = false;
    public zone: NgZone;
    transfering = false;


    constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ConnectionProvider) {
        this.connectionProvider = provider;
        this.zone = new NgZone({enableLongStackTrace: false});

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PlayPage');
    }

    public sendPlay() {
        let component = this;
        this.transfering = true;
        let input = this.connectionProvider.currentDevice.playMode.playTo8Bit();
        this.connectionProvider.transfer(input).then(function success(response) {
            console.log("Succesfully sent settings object");

        });
        setTimeout(function(){
            component.transfering = false;
        }, 1000);
    }

    public triggerTransfer() {
        if (this.triggerAutomatically) {
            console.log("triggered");
            this.sendPlay()
        }
    }

    public addPlayToProgram(){
        this.connectionProvider.currentDevice.program.entry.push(this.connectionProvider.currentDevice.playMode);
    }



}
