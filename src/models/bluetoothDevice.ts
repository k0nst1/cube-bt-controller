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
        color: {hue: 255, saturation: 255, value: 255}
    };
    public play: object = {
        mode: 1,
        feature1: 100,
        feature2: 100
    };
    public nextMode = function () {
        if (this.play.mode == 8) {
            this.play.mode = 1;
        } else {
            this.play.mode++;
        }
    };

    public previousMode = function () {
        if (this.play.mode == 1) {
            this.play.mode = 8;
        } else {
            this.play.mode--;
        }
    };
    public modes: object =
        [
            {
                "mode": 1,
                "feature1": 125,
                "feature2": 125,
                "speed": 100,
                color: {hue: 100, saturation: 255, value: 255},
                "useLocal": false
            },
            {
                "mode": 2,
                "feature1": 125,
                "feature2": 125,
                "speed": 100,
                color: {hue: 100, saturation: 255, value: 255},
                "useLocal": false
            }

        ]

    public procedureTimeLapse: number = 10;
}
