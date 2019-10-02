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
        setTimeout(function(){
            component.bluetoothProvider.stopScan()
            console.log("finished scanning...");

        }, 8000);
        console.log("currently scanning for 10 seconds...");
        this.bluetoothProvider.scanForDevices().subscribe(
            device => {
                let parsedDevice = JSON.parse(JSON.stringify(device));
                let isUnknown = component.isUnknown(parsedDevice);
                if (device && isUnknown == true) {
                    let newDevice = new BluetoothDevice();
                    newDevice.name = parsedDevice.name ? parsedDevice.name : null;
                    newDevice.uuid = null;
                    newDevice.macAddress = parsedDevice.address;
                    newDevice.connected = false;
                    console.log("adding new device to collection");
                    component.bluetoothProvider.bluetoothDevices.push(newDevice);

                }


            },
            error => {
                console.log(error)
            });


        component.isScanning = false;
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

    private stopScan(){

    }

    connectToDevice(unpairedDevice: string) {
        this.zone.run(() => {
            this.bluetoothProvider.connectToDevice(unpairedDevice);
        });
    }

    disconnectFromDevice(pairedDevice: BluetoothDevice) {

        this.zone.run(() => {
            this.bluetoothProvider.disconnectFromDevice(pairedDevice);
            if (pairedDevice) {
                this.currentDevice = new BluetoothDevice();
                pairedDevice.connected = false;
            }
        });
    }

    isUnknown(device){
        let unknown = true;
        this.bluetoothProvider.bluetoothDevices.forEach(function (currentDevice){
            if(unknown)
                unknown = !(currentDevice.macAddress === device.address);
        });
        console.log(unknown);
        return unknown;
    }
}
