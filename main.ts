let x = 0
let pausa = 500
for (let index = 0; index < 5; index++) {
    for (let y = 0; y <= 4; y++) {
        led.plot(x, y)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(pausa)
        basic.clearScreen()
    }
    x = x + 1
}
pausa = pausa - 100
