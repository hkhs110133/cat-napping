input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.clearScreen()
    }
})
let logging = false
logging = false
loops.everyInterval(60000, function () {
    if (logging) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
basic.forever(function () {
	
})
