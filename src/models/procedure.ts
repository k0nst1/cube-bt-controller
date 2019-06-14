import {Mode} from "./mode";

export class Procedure {


    public entry: Mode[];

    constructor() {
        this.entry = [];
    }

    public programTo8Bit(){

        let array = new Uint8Array(8*this.entry.length+5);
        array[0] = 12;
        array[1] = 19;
        array[2] = 91;
        array[3] = array.length-4;
        array[4] = 2;
        array = this.modesToBytes(array);
        console.log(array.length);
        console.log(array[array.length-1]);
        return array;
    }
    public saveProgram(){
        let array = new Uint8Array(5);
        array[0] = 12;
        array[1] = 19;
        array[2] = 91;
        array[3] = 1;
        array[4] = 3;
        return array;
    }
    private modesToBytes(array){
        let index = 5;
        this.entry.forEach(function(mode){
            array = mode.modeTo8Bit(array, index);
            index = index+8;
        });

        return array;
    }


    public intToByte( input ){
        return input & (255);
    }
}
