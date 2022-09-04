basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led.plot(1, 1)
        basic.pause(500)
        led.unplot(1, 1)
        basic.pause(500)
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led.plot(3, 4)
        basic.pause(500)
        led.unplot(3, 4)
        basic.pause(500)
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led.plot(2, 3)
        basic.pause(500)
        led.unplot(2, 3)
        basic.pause(500)
    }
})
