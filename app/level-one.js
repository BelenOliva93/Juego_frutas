var LevelOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "LevelOne" });
    },
    init: function() {},
    preload: function() {
        this.load.image("sky", 'assets/img/sky.png');
        this.load.image("logo", 'assets/img/logo.png');
    },
    create: function() {
        this.sky = this.add.image(640, 360, "sky").setScale(4);
        this.sky = this.add.image(530, 300, "logo");
        this.add.text(320, 460, "¡¡Recoge toda la fruta!! ", {
            font: "44px Arial",
            fill: "white"
          });
        this.time.addEvent({
            delay: 4000,
            loop: false,
            callback: () => {
                this.scene.start('LevelTwo');
            }
        })
    },
    update: function() {}
});