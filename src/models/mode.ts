export class Mode {

    public modeName: string = "test";
    public speed: 100;
    public feature1: 100;
    public feature2: 100;
    public feature3: 100;
    public color: { hue: 255, saturation: 255, value: 255 };
    public timelapse: 10;
    public modeNumber: number = 1;


    constructor(modeName: string, speed: 100, feature1: 100, feature2: 100, feature3: 100, color: { hue: 255; saturation: 255; value: 255 }, timelapse: 10, modeNumber: number) {
        this.modeName = modeName;
        this.speed = speed;
        this.feature1 = feature1;
        this.feature2 = feature2;
        this.feature3 = feature3;
        this.color = color;
        this.timelapse = timelapse;
        this.modeNumber = modeNumber;
    }

    public modeTo8Bit(array, index){
        array[index++] = this.modeNumber;
        array[index++] = this.color.hue;
        array[index++] = this.color.saturation;
        array[index++] = this.color.value;
        array[index++] = this.speed;
        array[index++] = this.feature1;
        array[index++] = this.feature2;
        if(this.timelapse){
            array[index++] = this.timelapse;
        }

        return array;

    }

    public getInt64Bytes( input ){
        return input & (255);
    }

    public nextMode = function () {
        if (this.modeNumber == 22) {
            this.modeNumber = 1;
        } else {
            this.modeNumber++;
        }
    };

    public previousMode = function () {
        if (this.modeNumber == 1) {
            this.modeNumber = 22;
        } else {
            this.modeNumber--;
        }
    };

    public playTo8Bit(){

        let array = new Uint8Array(12);
        //let array = new Uint8Array(1000);

        array[0] = 12;
        array[1] = 19;
        array[2] = 91;
        array[3] = 8;

        array[4] = 1;
        array = this.modeTo8Bit(array, 5);
        console.log(array.length);
        console.log(array[array.length-1]);
        return array;
    }
}
