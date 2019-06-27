import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConnectionProvider} from "../../providers/connection/connection";
import {Procedure} from "../../models/procedure";
import {Mode} from "../../models/mode";
import {Storage} from "@ionic/storage";

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
    public zone: NgZone;
    public transfering = false;
    public localStorage;

    constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ConnectionProvider, public storage: Storage) {
        this.connectionProvider = provider;
        this.currentMode = new Mode("test", 100, 100, 100, 100, {hue: 255, saturation: 255, value: 255}, 10, 1);
        this.zone = new NgZone({enableLongStackTrace: false});
        this.storage.get("program").then(
            program => {
                console.log("Program found in storage!");
                console.log(program);
                if(program == null){
                    this.connectionProvider.currentDevice.program = this.currentProgram = new Procedure();
                }else{
                    this.connectionProvider.currentDevice.program = this.currentProgram = program;
                }
            },
            error => {
                console.log("no program found using default program!");
                this.connectionProvider.currentDevice.program = this.currentProgram = new Procedure();
            });
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad ProgramPage');
    }

    public addToProgram() {
        this.zone.run(() => {
            this.currentProgram.entry.push(this.currentMode);
            this.currentMode = new Mode("test", 100, 100, 100, 100, {hue: 255, saturation: 255, value: 255}, 10, 1);
        });
        console.log("added currentMode:");
        console.log(this.currentMode);
        console.log("to current program:");
        console.log(this.currentProgram);
    };

    public playProgram() {
        let input = this.currentProgram.programTo8Bit();
        this.transfering = true;
        let component = this;
        this.connectionProvider.transfer(input).then(function success(response) {
            console.log("Succesfully sent settings object");
            setTimeout(function () {
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
            setTimeout(function () {
                component.transfering = false;
            }, 1000);
        });
    }
    addProgramToStorage(){
        this.storage.set("program", this.currentProgram);
    }
    public removeFromProgram(mode) {
        this.zone.run(() => {
            let index = this.currentProgram.entry.indexOf(mode)
            this.currentProgram.entry.splice(index, 1);
        });

    }

}
