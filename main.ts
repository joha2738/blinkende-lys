input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    music.playTone(880, music.beat(BeatFraction.Sixteenth))
    basic.pause(tid)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(tid)
    pins.digitalWritePin(DigitalPin.P2, 1)
    music.playTone(659, music.beat(BeatFraction.Sixteenth))
    basic.pause(tid)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(tid)
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(tid2)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(tid2)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(tid2)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(tid2)
    }
})
let tid2 = 0
let tid = 0
tid = 1
basic.forever(function () {
    tid2 = 1
})
