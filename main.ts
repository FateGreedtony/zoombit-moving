input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        rekabit.setRgbPixelColor(0, 0x00ffff)
    }
    zoombit.setHeadlight(HeadlightChannel.All, zoombit.digitalStatePicker(DigitalIoState.Off))
    zoombit.turn(TurnDirection.Right, 128)
    basic.pause(500)
    zoombit.brake()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        rekabit.setAllRgbPixelsColor(0x00ffff)
    }
    zoombit.move(MotorDirection.Forward, 255)
    basic.pause(500)
    zoombit.brake()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        rekabit.setRgbPixelColor(1, 0x00ffff)
    }
    zoombit.setHeadlight(HeadlightChannel.All, zoombit.digitalStatePicker(DigitalIoState.Off))
    zoombit.turn(TurnDirection.Left, 128)
    basic.pause(500)
    zoombit.brake()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        rekabit.setAllRgbPixelsColor(0xff0000)
    }
    zoombit.move(MotorDirection.Backward, 128)
    basic.pause(500)
    zoombit.brake()
})
basic.showString("Hello World")
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    rekabit.clearAllRgbPixels()
})
