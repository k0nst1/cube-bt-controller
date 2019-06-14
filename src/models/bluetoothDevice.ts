import {Mode} from "./mode";

export class BluetoothDevice {
    public uuid: string;
    public name: string;
    public macAddress: string;
    public connected: boolean;
    public usesProfile: boolean;
    public description: string;
    public mode: number = 1;
    public playMode: Mode;

    constructor() {
        this.playMode = new Mode("test", 100, 100, 100, 100, {hue: 255, saturation: 255, value: 255}, null, 1);
    }
    public nextMode = function () {
        if (this.playMode.modeName == 22) {
            this.playMode.modeName = 1;
        } else {
            this.playMode.modeName++;
        }
    };

    public previousMode = function () {
        if (this.playMode.modeName == 1) {
            this.playMode.modeName = 22;
        } else {
            this.playMode.modeName--;
        }
    };

    public modeTo8Bit(array, index){
        array[index] = this.playMode.modeName;
        array[index++] = this.playMode.color.hue;
        array[index++] = this.playMode.color.saturation;
        array[index++] = this.playMode.color.value;
        array[index++] = this.playMode.speed;
        array[index++] = this.playMode.feature1;
        array[index++] = this.playMode.feature2;

        return array;

    }
}
