import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {BluetoothDevice} from "../../models/bluetoothDevice";
import {NgZone} from "@angular/core";

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
    bluetoothDevices: BluetoothDevice[];
    peripheral: any = {};
    isScanning: boolean;
    currentDevice: BluetoothDevice;
    showDeviceControl: boolean = false;
    zone: NgZone;
    transferSucceeded: boolean = false;
    triggerAutomatically: boolean = false;


    constructor(public navCtrl: NavController, public navParams: NavParams, public bt: BluetoothSerial) {
        this.bluetooth = bt;
        this.bluetoothDevices = [];
        this.currentDevice = new BluetoothDevice();
        this.zone = new NgZone({enableLongStackTrace: false});
        this.currentDevice.connected = true;
        this.showDeviceControl = true;
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
        this.bluetooth.discoverUnpaired().then(function success(data) {
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

    private nextMode() {
        this.currentDevice.nextMode();
    }

    private previousMode() {
        this.currentDevice.previousMode();
    }

    private checkBluetooth() {
        let comp = this;
        this.disconnectFromDevice(null);
        this.bluetooth.isEnabled().then(function success(response) {
            comp.discoverUnpaired();
        }, function error() {
            comp.bluetooth.enable();
        });
    }

    connectToDevice(unpairedDevice: string) {
        this.bluetooth.connect(unpairedDevice);

        this.bluetooth.connect(unpairedDevice).subscribe(
            peripheral => this.onConnected(peripheral, unpairedDevice),
            peripheral => this.onConnectionFail(unpairedDevice)
        );
    }

    disconnectFromDevice(pairedDevice: BluetoothDevice) {
        this.bluetooth.disconnect();
        if (pairedDevice) {
            pairedDevice.connected = false;
        }
    }

    private onConnected(peripheral, unpairedDevice) {
        this.zone.run(() => {
            this.currentDevice.connected = true;
            this.currentDevice.macAddress = unpairedDevice;
            this.showDeviceControl = true;
        });
    }

    private onConnectionFail(unpairedDevice) {
        unpairedDevice.connected = false;
    }

    public triggerTransfer() {
        if (this.triggerAutomatically) {
            console.log("triggered");
            this.transferConfiguration()
        }
    }

    public transferConfiguration() {
        let transferSuccess = this.transferSucceeded;
        let device = this.currentDevice;
        let input = {};
        Object.assign(input, {global: device.global}, device.play);
        this.bluetooth.write(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object")
            transferSuccess = true;
        });
    }
    public addToProcedure() {
        let transferSuccess = this.transferSucceeded;
        let device = this.currentDevice;
        let input = {};
        Object.assign(input, {"action": "procedure_add"}, device.global, device.play, {"timelapse": device.procedureTimeLapse});
        this.bluetooth.write(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object")
            transferSuccess = true;
        });
    }
}
