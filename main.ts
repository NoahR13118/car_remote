radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "x") {
        xValue = value
    }
    
    if (name == "y") {
        yValue = value
    }
    
})
let yValue = 0
let xValue = 0
radio.setGroup(1)
radio.setGroup(1)
basic.forever(function on_forever() {
    radio.sendValue("x", Math.idiv(input.acceleration(Dimension.X), 10))
    basic.pause(100)
    radio.sendValue("y", Math.idiv(input.acceleration(Dimension.Y), 10))
    basic.pause(100)
})
basic.forever(function on_forever2() {
    cuteBot.motors(yValue + xValue, yValue - xValue)
})
