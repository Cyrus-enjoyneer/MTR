let buf3 = ""

//% weight=100 color=#2699BF icon="\uf238"
//% block ="MTR"
namespace mtr {
    export enum stationName {
        //% block="Tsuen Wen"
        tsuenWen = 1,
        //% block="Hong Kong University"
        hku = 2,
        //% block="Sai Ying Pun"
        saiYingPun = 3,
        //% block="Sheung Wan"
        sheungWan = 4,
        //% block="Central"
        central = 5
    }
    export enum voiceName {
        //% block="Open Door"
        openDoor = 2,
        //% block="Stand Back"
        standBack = 3,
        //% block="Next Station"
        nextStation = 1,
    }
    export enum buttons {
        //% block="1"
        A = 1,
        //% block="2"
        B = 2,
        //% block="3"
        C =3,
        //% block="4"
        D = 4,
        //% block="5"
        E = 5
    }

    export enum doorStatus {
        //% block="open"
        open = 0,
        //% block="close"
        close = 1,
    }
    export enum rfidColor {
        //% block="紅"
        red = "red",
        //% block="藍"
        blue = "blue",
        //% block="銀"
        silver = "silver"
    }
    export enum ledColor {
        //% block="red"
        red = 4,
        //% block="yellow"
        yellow = 3,
        //% block="purple"
        purple = 5,
        //% block="green"
        green = 1,
        //% block="blue"
        blue = 7,
        //% block="orange"
        orange = 8
        
    }
    ///////////////////// 初始化数据 ///////////////////////

    //% blockId="initTrain" weight=12 blockGap=17
    //% block="initialize the train"
    //% subcategory="initTrain"
    export function initTrain() {
        serial.redirect(
            SerialPin.P12,
            SerialPin.P16,
            BaudRate.BaudRate9600
        )
        // Ensure new-line delimited reading and clear any partial start
        serial.setRxBufferSize(64)
        buf3 = "___"
    }
    /*
    //% blockId="initButton" weight=12 blockGap=17
    //% block="初始化按鈕"
    //% subcategory="initTrain"
    export function initButton() {

    }
    */

    ///////////////////// LED wall ///////////////////////

    //% blockId="showName" weight=12 blockGap=17
    //% block="set the name on LED wall to %stationName "
    //% func.fieldEditor="gridpicker"
    //% subcategory="showName"
    export function showName(name: stationName ) {
        serial.writeString("I" + name + "\n")
    }

    //% blockId="setLedColor" weight=12 blockGap=17
    //% block="Set the headlight color to %color"
    //% func.fieldEditor="gridpicker"
    //% subcategory="showName"
    export function setLedColor(color: ledColor) {
        serial.writeString("L" + color + "\n")
    }
    ///////////////////// Voice ///////////////////////

    //% blockId="playVoice" weight=12 blockGap=17
    //% block="Play audio: %voiceName "
    //% func.fieldEditor="gridpicker"
    //% subcategory="playVoice"
    export function playVoice(name: voiceName) {
        serial.writeString("S" + name + "\n")
    }


    //% subcategory="playVoice"
    //% blockId="setVolume" weight=12 blockGap=15
    //% block="Set Volume to  %volume|"
    //% volume.min=5 volume.max=20 volume.defl = 5
    export function setVolume(volume: number) {
        serial.writeString("V" + volume + "\n")
    }
/*
    //% subcategory="buttons"
    //% blockId="buttonPressed" weight=12 blockGap=15
    //% block="按鈕 |%buttons| 被按下"
    //% func.fieldEditor="gridpicker"
    export function button(buttons: buttons):boolean{
        return true;
    }
    */
    //% subcategory="door"
    //% blockId="setDoor" weight=12 blockGap=15
    //% block="Set door to  %doorStatus|"
    export function setDoor(inputDoor: doorStatus) {
        if(inputDoor ==0){
            pins.servoWritePin(AnalogPin.P0, 157)
            pins.servoWritePin(AnalogPin.P1, 211)
        }
        if (inputDoor == 1) {
            pins.servoWritePin(AnalogPin.P0, 95)
            pins.servoWritePin(AnalogPin.P1, 153)
        }
    }

    //% subcategory="motor"
    //% blockId="setSpeed" weight=12 blockGap=15
    //% block="The train moves forward with %speed power"
    //% speed.min=0 speed.max=100
    export function setSpeed(speed: number) {
        pins.servoWritePin(AnalogPin.P2, speed *0.4 +100)
    }
    //% subcategory="motor"
    //% blockId="stopTrain" weight=12 blockGap=15
    //% block="Stop the train"
    export function stopTrain() {
        pins.servoWritePin(AnalogPin.P2, 90)
    }
    //% subcategory="RFID"
    //% blockId="readRfid" weight=12 blockGap=15
    //% block="開始讀取RFID 訊號"
    //% func.fieldEditor="gridpicker"
    export function readRfid()  {
        
    }
    //% subcategory="RFID"
    //% blockId="startRfid" weight=12 blockGap=15
    //% block="當感應到RFID 訊號"
    //% func.fieldEditor="gridpicker"
    export function startRfid(body:()=> void) {

    }
    //% subcategory="RFID"
    //% blockId="getRfidColor" weight=12 blockGap=15
    //% block="RFID 標籤顏色 "
    export function getRfidColor():string {
        return "";
    }

    //% subcategory="RFID"
    //% blockId="returnRfidColor" weight=12 blockGap=15
    //% block="%rfidColor 色 "
    //% func.fieldEditor="gridpicker"
    export function returnRfidColor(rfidColor:rfidColor): string {
        return "";
    }
}
