radio.setGroup(1)
mtr.initButton()
basic.forever(function () {
    if (mtr.button(mtr.buttons.A)) {
        radio.sendString("faster")
    } else if (mtr.button(mtr.buttons.E)) {
        radio.sendString("slower")
    }
})
