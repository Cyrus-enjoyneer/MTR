
//% weight=100 color=#2699BF icon=""
//% block ="MTR"
namespace mtr {
    export enum stationName {
        //% block="Tsuen Wen"
        tsuenWen = 0,
        //% block="Hong Kong University"
        hku = 1,
        //% block="Sai Ying Pun"
        saiYingPun = 2,
        //% block="Sheung Wan"
        sheungWan = 3,
        //% block="Central"
        central = 4
    }
    export enum voiceName {
        //% block="Open Door"
        openDoor = 0,
        //% block="Stand Back"
        standBack = 1,
        //% block="Next Station"
        nextStation = 2,
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
        //% block="開"
        open = 0,
        //% block="關"
        close = 1,
    }
    export enum rfidColor {
        //% block="紅"
        red = 0,
        //% block="藍"
        blue = 1,
        //% block="銀"
        silver = 1
    }
    ///////////////////// 初始化数据 ///////////////////////

    //% blockId="initTrain" weight=12 blockGap=17
    //% block="initialize the train"
    //% subcategory="initTrain"
    export function initTrain() {
        
    }
    //% blockId="initButton" weight=12 blockGap=17
    //% block="初始化按鈕"
    //% subcategory="initTrain"
    export function initButton() {

    }

    ///////////////////// LED wall ///////////////////////

    //% blockId="showName" weight=12 blockGap=17
    //% block="set the name on LED wall to %stationName "
    //% func.fieldEditor="gridpicker"
    //% subcategory="showName"
    export function showName(name: stationName ) {

    }
    ///////////////////// Voice ///////////////////////

    //% blockId="playVoice" weight=12 blockGap=17
    //% block="Play audio: %voiceName "
    //% func.fieldEditor="gridpicker"
    //% subcategory="playVoice"
    export function playVoice(name: voiceName) {

    }


    //% subcategory="playVoice"
    //% blockId="setVolume" weight=12 blockGap=15
    //% block="Set Volume to  %volume|"
    //% volume.min=5 volume.max=20
    export function setVolume(volume: number) {

    }

    //% subcategory="buttons"
    //% blockId="buttonPressed" weight=12 blockGap=15
    //% block="按鈕 |%buttons| 被按下"
    //% func.fieldEditor="gridpicker"
    export function button(buttons: buttons):boolean{
        return true;
    }
    //% subcategory="車門"
    //% blockId="setDoor" weight=12 blockGap=15
    //% block="設定車門狀態為  %doorStatus|"
    export function setDoor(doorStatus: doorStatus) {

    }

    //% subcategory="行駛"
    //% blockId="setSpeed" weight=12 blockGap=15
    //% block="列車以  %speed|  功率前進"
    //% speed.min=0 speed.max=100
    export function setSpeed(speed: number) {

    }
    //% subcategory="行駛"
    //% blockId="stopTrain" weight=12 blockGap=15
    //% block="列車停止"
    export function stopTrain() {

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
