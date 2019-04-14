export class BluetoothDevice {
    public uuid: string;
    public name: string;
    public macAddress: string;
    public connected: boolean;
    public usesProfile: boolean;
    public description: string;
    public mode: number = 1;

    public global: object = {
        speed: 100,
        bri: 100,
        color: { r:255, g:255, b:255}
    }
    public play: object = {
        mode: 1,
        feature1: 100,
        feature2: 100
    }

}
