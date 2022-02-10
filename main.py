def on_received_value(name, value):
    global xValue, yValue
    if name == "x":
        xValue = value
    if name == "y":
        yValue = value
radio.on_received_value(on_received_value)

yValue = 0
xValue = 0
radio.set_group(1)
radio.set_group(1)

def on_forever():
    radio.send_value("x", Math.idiv(input.acceleration(Dimension.X), 10))
    basic.pause(100)
    radio.send_value("y", Math.idiv(input.acceleration(Dimension.Y), 10))
    basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    cuteBot.motors(yValue + xValue, yValue - xValue)
basic.forever(on_forever2)
