import {Component} from '@angular/core';
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
    public triggerAutomatically: boolean = false;
    transferSucceeded: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ConnectionProvider) {
        this.connectionProvider = provider;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PlayPage');
    }


    private nextMode() {
        this.connectionProvider.currentDevice.nextMode();
    }

    private previousMode() {
        this.connectionProvider.currentDevice.previousMode();
    }

    public triggerTransfer() {
        if (this.triggerAutomatically) {
            console.log("triggered");
            this.transferConfiguration()
        }
    }

    public transferConfiguration() {
        let transferSuccess = this.transferSucceeded;
        let device = this.connectionProvider.currentDevice;
        let input = {};
        Object.assign(input, {global: device.global}, device.play);
        this.connectionProvider.transfer(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object")
            transferSuccess = true;
        });
    }


    public addToProcedure() {
        let transferSuccess = this.transferSucceeded;
        let device = this.connectionProvider.currentDevice;
        let input = {};
        Object.assign(input, {"action": "procedure_add"}, device.global, device.play, {"timelapse": device.procedureTimeLapse});
        this.connectionProvider.transfer(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object")
            transferSuccess = true;
        });
    }

    public sendProcedureTest() {
        let input = {
            "mode": "procedure",
            "command":
                [
                    {
                        "effect": 1,
                        "time": 10,
                        "color": {hue: 100, saturation: 255, value: 255},
                        feature1: 100,
                        feature2: 100
                    },
                    {
                        "effect": 2,
                        "time": 10,
                        "color": {hue: 100, saturation: 255, value: 255},
                        feature1: 100,
                        feature2: 100
                    },
                    {
                        "effect": 3,
                        "time": 10,
                        "color": {hue: 100, saturation: 255, value: 255},
                        feature1: 100,
                        feature2: 100
                    },
                    {
                        "effect": 4,
                        "time": 10,
                        "color": {hue: 100, saturation: 255, value: 255},
                        feature1: 100,
                        feature2: 100
                    },
                    {
                        "effect": 5,
                        "time": 10,
                        "color": {hue: 100, saturation: 255, value: 255},
                        feature1: 100,
                        feature2: 100
                    },
                    {
                        "effect": 6,
                        "time": 10,
                        "color": {hue: 100, saturation: 255, value: 255},
                        feature1: 100,
                        feature2: 100
                    },
                    {
                        "effect": 7,
                        "time": 10,
                        "color": {hue: 100, saturation: 255, value: 255},
                        feature1: 100,
                        feature2: 100
                    },
                ]
        };
        this.connectionProvider.transfer(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object")
        });
    }


    public sendPlayTest() {
        let input = {
            "mode": "play",
            "command":
                {"effect": 1, "color": {hue: 100, saturation: 255, value: 255}, feature1: 100, feature2: 100},
        };
        this.connectionProvider.transfer(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object")
        });
    }

}
