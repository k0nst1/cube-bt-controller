import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {Cube} from "../../models/cube";
import {UnpairedCube} from "../../models/unpairedCube";

/**
 * Generated class for the ConnectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html',
})
export class ConnectionPage {

  bluetooth: BluetoothSerial;
  connectedCubes: Cube[];
  unpairedCubes: UnpairedCube[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public bt: BluetoothSerial) {
    this.bluetooth = bt;
    this.connectedCubes = [];
    this.unpairedCubes = [];

    let cubeExample = new Cube();
    cubeExample.id = 1;
    cubeExample.name = "Wohnzimmer";
    cubeExample.description = "First example cube";
    cubeExample.status = "connected";

    let unpairedCubeExample = new UnpairedCube();
    unpairedCubeExample.name = "13123-1231-3133-1";
    unpairedCubeExample.uuid = "12313-13213123-1231231-12312312";
    unpairedCubeExample.macAddress = "00-14-22-01-23-45";

    this.unpairedCubes.push(unpairedCubeExample);
    this.connectedCubes.push(cubeExample);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectionPage');
    this.checkBluetooth();
    //this.listConnectedDevices();
    //this.discoverUnpaired();

  }

  discoverUnpaired() {
    let comp = this;
    this.bluetooth.discoverUnpaired().then(function success(response) {
      response.data.foreach(device => {
        let newDevice = new UnpairedCube();
        newDevice.name = device.name ? device.name : null;
        newDevice.uuid = device.id;
        newDevice.macAddress = device.address;

        comp.unpairedCubes.push(newDevice);
      })
      console.log(response);
    }, function error(error) {
      console.log(error);
    })
  }

  private checkBluetooth() {
    let comp = this;
    this.bluetooth.isEnabled().then(function success(response) {
      comp.discoverUnpaired();
    }, function error() {
      comp.bluetooth.enable();
    });
  }

  private listConnectedDevices() {
    this.bluetooth.list().then(function success(response) {

    })
  }

  connectToDevice(unpairedCube: UnpairedCube) {
    this.bluetooth.connect(unpairedCube.uuid);
    let index = this.unpairedCubes.indexOf(unpairedCube);
    this.unpairedCubes.splice(index, 1);
    let newPairedCube = new Cube();
    newPairedCube.name = "generic name " + this.connectedCubes.length + 1;
    this.connectedCubes.push(newPairedCube);
  }
}
