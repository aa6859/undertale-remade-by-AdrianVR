controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("B F D G F - D C5 ", 120), music.PlaybackMode.UntilDone)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(mySprite)
    controller.moveSprite(mySprite)
})
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
game.splash("Welcome to undertale remade.")
mySprite = sprites.create(assets.image`cute blob`, SpriteKind.Player)
