/*
 * プラレール教材
 */

/*
ポイントレール
*/
enum PointState {
    //% block="直進"
    Stright,
    //% block="曲がる"
    Reverse
}

const PointStateAngles = [
    132, // 直進の時の角度
    150  // 曲がる際の角度
];

/*
ストップレール
*/
enum StopState {
    //% block="停止"
    Stop,
    //% block="進行"
    Go
}

const StopStateAngles = [
    132, // 停止の時の角度
    150  // 進行際の角度
];

//% weight=50 color=#32c032 icon="\uf1b9" block="プラレール"
namespace plarail {
    /**
    * ポイントレールの状態を変える
    */
    //% block
    //% weight=50 block="端子%pinのポイントレールを%stateにする"
    export function ポイントを動かす(pin: AnalogPin, state: PointState): void {
        pins.servoSetPulse(pin, 1500)
        pins.servoWritePin(pin, PointStateAngles[state]);
        basic.pause(200);
    }
    /**
    * ストップレールの状態を変える
    */
    //% block
    //% weight=50 block="端子%pinのストップレールを%stateにする"
    export function ストップレールを動かす(pin: AnalogPin, state: StopState): void {
        pins.servoSetPulse(pin, 1500)
        pins.servoWritePin(pin, StopStateAngles[state]);
        basic.pause(200);
    }
    /**
    * 列車がセンサーを通過した時
    */
    //% block
    //% weight=50 block="列車が%pinのセンサーを通過したら"
    export function 列車がセンサーを通過したら(pin: DigitalPin, body: ()=>void){
        pins.setPull(pin, PinPullMode.PullUp) // PullDownしておく
        const func = () => {
            // チャタリング防止
            if (pins.pulseDuration() > 1000) {
                body();
            }
        }
        pins.onPulsed(pin, PulseValue.Low, func);
    }
}
