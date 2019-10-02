import {HttpClient} from '@angular/common/http';
import {Injectable, NgZone} from '@angular/core';
import {BluetoothDevice} from "../../models/bluetoothDevice";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {AppModule} from "../../app/app.module";
import {BLE} from "@ionic-native/ble";
import {BluetoothLE} from "@ionic-native/bluetooth-le";

/*
  Generated class for the ConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectionProvider {

    private bluetooth: BluetoothSerial;
    bluetoothDevices = [];
    currentDevice = new BluetoothDevice();
    zone: NgZone;
    connectedDevices = [];

    constructor(public bt: BluetoothSerial, private ble: BluetoothLE) {
        console.log('Hello ConnectionProvider Provider');
        this.bluetooth = bt;
        this.zone = new NgZone({enableLongStackTrace: false});
        this.ble.initialize();

    }

    scanForDevices() {
        console.log("currently scanning...");
        //return this.bluetooth.discoverUnpaired();
        return this.ble.startScan(null);
    }

    stopScan() {
        console.log("currently scanning...");
        //return this.bluetooth.discoverUnpaired();
        return this.ble.stopScan();
    }

    private checkBluetooth() {
        let provider = this;
        this.disconnectFromDevice(null);
        this.bluetooth.isEnabled().then(function success(response) {
            provider.scanForDevices();
        }, function error() {
            provider.bluetooth.enable();
        });
    }

    connectToDevice(unpairedDevice: string) {
        this.ble.connect({address: unpairedDevice, autoConnect: true}).subscribe(
            peripheral => this.onConnected(peripheral, unpairedDevice),
            peripheral => this.onConnectionFail(unpairedDevice)
        );
    }

    disconnectFromDevice(pairedDevice: BluetoothDevice) {
        if(pairedDevice === null){
            return;
        }
        this.ble.disconnect({address:pairedDevice.macAddress});
        if (pairedDevice) {
            pairedDevice.connected = false;
        }
    }

    private onConnected(peripheral, unpairedDevice) {
        this.zone.run(() => {
            this.currentDevice.connected = true;
            this.currentDevice.macAddress = unpairedDevice;
            this.connectedDevices.push(unpairedDevice);

        });
    }

    private onConnectionFail(unpairedDevice) {
        unpairedDevice.connected = false;
    }

    public transfer(input){
        this.connectedDevices.forEach(function (device) {
            this.ble.write({address: device.macAddress, value: input});
        });
    }

    public listConnectedDevices(){
        return true;
    }
}
