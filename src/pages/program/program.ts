import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConnectionProvider} from "../../providers/connection/connection";
import {Procedure} from "../../models/procedure";
import {Mode} from "../../models/mode";

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-program',
    templateUrl: 'program.html',
})
export class ProgramPage {
    public connectionProvider: ConnectionProvider;
    public currentProgram: Procedure;
    public currentMode: Mode;
    public zone: NgZone
    public transfering = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ConnectionProvider) {
        this.connectionProvider = provider;
        this.currentProgram = new Procedure();
        this.currentMode = new Mode("test", 100, 100, 100, 100, {hue: 255, saturation: 255, value: 255}, 10, 1);
        console.log(this.currentMode);
        console.log("asdasd");
        this.zone = new NgZone({enableLongStackTrace: false});

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProgramPage');
    }

    public addToProgram() {
        console.log(this.currentMode);
        this.zone.run(() => {
            this.currentProgram.entry.push(this.currentMode);
            this.currentMode = new Mode("test", 100, 100, 100, 100, {hue: 255, saturation: 255, value: 255}, 10, 1);
        });
        console.log(this.currentProgram);
    };

    public playProgram() {
        let device = this.connectionProvider.currentDevice;
        let input = {};
        input = this.currentProgram.programTo8Bit();
        this.transfering = true;
        let component = this;
        this.connectionProvider.transfer(input).then(function success(response) {
            console.log("Succesfully sent settings object");
            setTimeout(function(){
                component.transfering = false;
            }, 1000);
        });
    }


    public saveProgram() {
        let input = this.currentProgram.saveProgram();
        this.transfering = true;
        let component = this;
        this.connectionProvider.transfer(input).then(function success(response) {
            console.log("Succesfully sent settings object");
            setTimeout(function(){
                component.transfering = false;
            }, 1000);
        });
    }

    public removeFromProgram(mode) {
        this.zone.run(() => {
            let index = this.currentProgram.entry.indexOf(mode)
            this.currentProgram.entry.splice(index, 1);
        });

    }

}
