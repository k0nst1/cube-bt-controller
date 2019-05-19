import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Procedure} from "../../models/procedure";
import {Mode} from "../../models/mode";

/**
 * Generated class for the ProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-procedure',
    templateUrl: 'procedure.html',
})
export class ProcedurePage {
    public procedure: Procedure;
    public newProcedureEntry: Mode = new Mode();
    public listOfModes: Mode[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.procedure = new Procedure();
        this.listOfModes = [];

        let exampleMode = new Mode();
        exampleMode.modeName = "1234";
        this.listOfModes.push(exampleMode);

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProcedurePage');
    }

    addProcedureEntry(mode) {
        this.listOfModes.push(mode);
    }

    removeProcedureEntry(mode) {

    }
}
