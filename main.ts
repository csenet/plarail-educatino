plarail.列車がセンサーを通過したら(DigitalPin.P16, function () {
    plarail.ポイントを動かす(AnalogPin.P0, PointState.Stright)
    plarail.ストップレールを動かす(AnalogPin.P0, StopState.Stop)
    basic.pause(1000)
    plarail.ポイントを動かす(AnalogPin.P0, PointState.Stright)
})
plarail.ポイントを動かす(AnalogPin.P0, PointState.Stright)
