import {Mode} from "./mode";

export class Procedure {


    public entry: Mode[];

    constructor() {
        this.entry = [];
        this.entry.push(new Mode("asd",255,255,0,0,{hue: 23,saturation: 25,value: 255},60,15))
        this.entry.push(new Mode("asd",55,55,0,0,{hue: 50,saturation: 255,value: 190},60,17))
        this.entry.push(new Mode("asd",90,150,0,0,{hue: 39,saturation: 47,value: 255},60,21))
        this.entry.push(new Mode("asd",255,255,0,0,{hue: 178,saturation: 180,value: 100},60,10))
        this.entry.push(new Mode("asd",255,230,0,0,{hue: 0,saturation: 150,value: 255},60,13))
        this.entry.push(new Mode("asd",200,190,0,0,{hue: 255,saturation: 255,value: 255},60,16))
        this.entry.push(new Mode("asd",100,255,0,0,{hue: 190,saturation: 140,value: 190},120,2))
        this.entry.push(new Mode("asd",255,255,0,0,{hue: 255,saturation: 255,value: 255},60,17))
        this.entry.push(new Mode("asd",180,18,0,0,{hue: 0,saturation: 90,value: 130},45,10))
        this.entry.push(new Mode("asd",100,30,0,0,{hue: 0,saturation: 125,value: 200},30,6));
        this.entry.push(new Mode("asd",60,110,0,0,{hue: 160,saturation: 255,value: 170},15,9));
        this.entry.push(new Mode("asd",180,18,0,0,{hue: 90,saturation: 90,value: 130},60,10))
        this.entry.push(new Mode("asd",43,255,0,0,{hue: 39,saturation: 47,value: 255},60,14))
        this.entry.push(new Mode("asd",100,255,0,0,{hue: 255,saturation: 140,value: 190},60,2))
        this.entry.push(new Mode("asd",180,255,0,0,{hue: 0,saturation: 90,value: 130},60,10))
        this.entry.push(new Mode("asd",90,0,0,0,{hue: 100,saturation: 185,value: 255},40,20))


    }

    public programTo8Bit() {

        let array = new Uint8Array(8 * this.entry.length + 5);
        array[0] = 12;
        array[1] = 19;
        array[2] = 91;
        array[3] = array.length - 4;
        array[4] = 2;
        array = this.modesToBytes(array);
        console.log(array.length);
        console.log(array[array.length - 1]);
        return array;
    }

    public saveProgram() {
        let array = new Uint8Array(5);
        array[0] = 12;
        array[1] = 19;
        array[2] = 91;
        array[3] = 1;
        array[4] = 3;
        return array;
    }

    private modesToBytes(array) {
        let index = 5;
        this.entry.forEach(function (mode) {
            array = mode.modeTo8Bit(array, index);
            index = index + 8;
        });

        return array;
    }

    public procedureToJson() {
        /**let JSONObject = {
            modes: []
        };
        this.entry.forEach(function (mode) {
            JSONObject.modes.push({modeNumber: mode.modeNumber, speed: mode.speed, })
        });**/
        return JSON.stringify(this);
    }

    public intToByte(input) {
        return input & (255);
    }
}
