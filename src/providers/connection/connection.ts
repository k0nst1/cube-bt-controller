import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BluetoothDevice} from "../../models/bluetoothDevice";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {AppModule} from "../../app/app.module";

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

    constructor(public bt: BluetoothSerial) {
        console.log('Hello ConnectionProvider Provider');
        this.bluetooth = bt;
    }

    scanForDevices() {
        console.log("currently scanning...");
        return this.bluetooth.discoverUnpaired();
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
        this.currentDevice.connected = true;
        this.currentDevice.macAddress = unpairedDevice;
    }

    private onConnectionFail(unpairedDevice) {
        unpairedDevice.connected = false;
    }

    public transfer(input){
        return this.bluetooth.write(input);
    }
}
