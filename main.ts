input.onButtonPressed(Button.A, function () {
    while (compteur > 0) {
        basic.showNumber(compteur)
        compteur += -1
        basic.pause(1000)
    }
    basic.clearScreen()
})
let compteur = 0
basic.clearScreen()
compteur = 10
