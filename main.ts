input.onButtonPressed(Button.A, function () {
    while (nbre_depart > 0) {
        basic.showNumber(nbre_depart)
        nbre_depart += -1
        basic.pause(1000)
    }
    basic.showNumber(nbre_depart)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    nbre_depart = 0
})
input.onButtonPressed(Button.B, function () {
    nbre_depart += 1
    basic.showNumber(nbre_depart)
})
let nbre_depart = 0
basic.clearScreen()
nbre_depart = 0
basic.showNumber(nbre_depart)
