import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {BluetoothDevice} from "../../models/bluetoothDevice";
import {NgZone} from "@angular/core";
import {ConnectionProvider} from "../../providers/connection/connection";

/**
 * Generated class for the ConnectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-connection',
    templateUrl: 'connection.html',
})
export class ConnectionPage {
    bluetoothProvider: ConnectionProvider;
    bluetoothDevices: BluetoothDevice[];
    peripheral: any = {};
    isScanning: boolean;
    currentDevice: BluetoothDevice;
    showDeviceControl: boolean = false;
    zone: NgZone;
    transferSucceeded: boolean = false;
    triggerAutomatically: boolean = false;


    constructor(public navCtrl: NavController, public navParams: NavParams, public connectionProvider: ConnectionProvider) {
        this.bluetoothProvider = connectionProvider;
        this.bluetoothDevices = [];
        this.currentDevice = new BluetoothDevice();
        this.zone = new NgZone({enableLongStackTrace: false});
        //this.currentDevice.connected = true;
        //this.showDeviceControl = true;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ConnectionPage');
        this.isScanning = false;
        this.checkBluetooth();
        //this.listConnectedDevices();
        //this.discoverUnpaired();

    }

    discoverUnpaired() {
        this.isScanning = true;
        let component = this;
        console.log("currently scanning...");
        this.bluetoothProvider.scanForDevices().then(function success(data) {
            if (data) {
                component.bluetoothDevices = [];
                data.forEach(device => {
                    let newDevice = new BluetoothDevice();
                    newDevice.name = device.name ? device.name : null;
                    newDevice.uuid = device.id;
                    newDevice.macAddress = device.address;
                    newDevice.connected = false;
                    component.bluetoothDevices.push(newDevice);
                });
            }
            console.log("finished scanning...");
            component.isScanning = false;
            console.log(data);
        }, function error(error) {
            console.log(error);
        })
    }



    private checkBluetooth() {
        let component = this;
        this.disconnectFromDevice(null);
        this.connectionProvider.bt.isEnabled().then(function success(response) {
            component.discoverUnpaired();
        }, function error() {
            component.connectionProvider.bt.enable();
        });
    }

    connectToDevice(unpairedDevice: string) {
        this.bluetoothProvider.connectToDevice(unpairedDevice);
    }

    disconnectFromDevice(pairedDevice: BluetoothDevice) {
        this.bluetoothProvider.disconnectFromDevice(pairedDevice);
        if (pairedDevice) {
            pairedDevice.connected = false;
        }
    }



}
