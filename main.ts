let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = randint(0, 4)
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(b - a)
})
input.onButtonPressed(Button.B, function () {
    b = randint(5, 9)
    basic.showNumber(b)
})
basic.forever(function () {
	
})
