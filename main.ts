function Jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
input.onButtonPressed(Button.A, function () {
    Vert()
    basic.pause(5000)
    Jaune()
    basic.pause(2000)
    Pieton()
    Rouge()
    basic.pause(10000)
    basic.showNumber(10)
    basic.showNumber(9)
    basic.showNumber(8)
    basic.showNumber(7)
    basic.showNumber(6)
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    Non_pieton()
})
function Non_pieton () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function Vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function Pieton () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
Non_pieton()
basic.forever(function () {
    Vert()
    basic.pause(5000)
    Jaune()
    basic.pause(2000)
    Rouge()
    basic.pause(5000)
})
