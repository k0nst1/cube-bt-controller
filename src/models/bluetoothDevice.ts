import {Mode} from "./mode";
import {Procedure} from "./procedure";

export class BluetoothDevice {
    public uuid: string;
    public name: string;
    public macAddress: string;
    public connected: boolean;
    public usesProfile: boolean;
    public description: string;
    public mode: number = 1;
    public playMode: Mode;
    public program: Procedure;

    constructor() {
        this.playMode = new Mode("test", 100, 100, 100, 100, {hue: 255, saturation: 255, value: 255}, null, 1);
        this.program = new Procedure();
    }

}
