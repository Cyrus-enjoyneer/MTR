
//% weight=100 color=#2699BF icon=""

namespace mtr {
    export enum stationName {
        //% block="tsun wen"
        tw = 0,
        //% block="central"
        central = 1,
    }
    ///////////////////// 初始化数据 ///////////////////////

    //% blockId="initTrain" weight=12 blockGap=17
    //% block="initialize the train"
    //% subcategory="initTrain"
    export function initTrain() {
        
    }

    ///////////////////// LED wall ///////////////////////

    //% blockId="showName" weight=12 blockGap=17
    //% block="set the name on LED wall to %stationName "
    //% func.fieldEditor="gridpicker"
    //% subcategory="showName"
    export function showName(name: stationName ) {

    }





}
