let RE = 0
basic.forever(function () {
    RE = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    RE,
    1023
    )
})
