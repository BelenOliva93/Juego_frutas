var LevelTwo = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "LevelTwo" });
    },
    
    init: function(data) {
        console.log("data", data);

        score = 0;
        gameOver = false;
    },
    
    preload: function() {


        this.load.image('sky', 'assets/img/sky.png');
        this.load.image('platform', 'assets/img/platform.png');
        this.load.image('apple', 'assets/img/apple.png');
        this.load.image('eggplant', 'assets/img/eggplant.png');
        this.load.image('shoe', 'assets/img/shoe.png');

        this.load.spritesheet('dude',
            'assets/img/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );

    },

    create: function () {

        
        /**Crear el cielo */
        this.add.image(400, 300, 'sky') .setScale(4);
      
        /**Crear las plataformas */
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'platform').setScale(4).refreshBody();

        platforms.create(600, 400, 'platform');
        platforms.create(50, 350, 'platform');
        platforms.create(950, 320, 'platform');
        platforms.create(450, 220, 'platform');



        /**Crear el jugador */
        player = this.physics.add.sprite(100, 450, 'dude');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { applet: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { applet: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        /*player.body.setGravityY(300)*/

        /**Colisión jugador plataformas */
        this.physics.add.collider(player, platforms);

        /**Colisión jugador plataformas */
        cursors = this.input.keyboard.createCursorKeys();

        //**Boton restart

        this.input.keyboard.on(
            "keydown-R",
            function () {
            this.scene.restart({ level: this.sys.settings.data.level });
            },
            this
        );

        //OBJETOS//
        /**Crear manzanas */
        /**manzana 1 */
        apples = this.physics.add.group({
            key: 'apple',
            setXY: { x: 300, y: 50, stepX: 90 }
        });

        /**Colisión manzana plataformas */
        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(apples, player);
        this.physics.add.overlap(player, apples, collectApple, null, this);

        /**manzana 2 */
        apples = this.physics.add.group({
            key: 'apple',
            setXY: { x: 600, y: 50, stepX: 90 }
        });

        /**Colisión manzana plataformas */
        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(apples, player);
        this.physics.add.overlap(player, apples, collectApple, null, this);

        /**manzana 3 */
        apples = this.physics.add.group({
            key: 'apple',
            setXY: { x: 100, y: 150, stepX: 90 }
        });

        /**Colisión manzana plataformas */
        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(apples, player);
        this.physics.add.overlap(player, apples, collectApple, null, this);

        /**manzana 4 */
        apples = this.physics.add.group({
            key: 'apple',
            setXY: { x: 200, y: 450, stepX: 90 }
        });

        /**Colisión manzana plataformas */
        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(apples, player);
        this.physics.add.overlap(player, apples, collectApple, null, this);

        /**manzana 5 */
        apples = this.physics.add.group({
            key: 'apple',
            setXY: { x: 200, y: 450, stepX: 90 }
        });

        /**Colisión manzana plataformas */
        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(apples, player);
        this.physics.add.overlap(player, apples, collectApple, null, this);

        /**manzana 6 */
        apples = this.physics.add.group({
            key: 'apple',
            setXY: { x: 700, y: 450, stepX: 90 }
        });

        /**Colisión manzana plataformas */
        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(apples, player);
        this.physics.add.overlap(player, apples, collectApple, null, this);

        /**manzana 7 */
        apples = this.physics.add.group({
            key: 'apple',
            setXY: { x: 500, y: 350, stepX: 90 }
        });

        /**Colisión manzana plataformas */
        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(apples, player);
        this.physics.add.overlap(player, apples, collectApple, null, this);

        /**manzana 8 */
        apples = this.physics.add.group({
            key: 'apple',
            setXY: { x: 870, y: 70, stepX: 90 }
        });

        /**Colisión manzana plataformas */
        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(apples, player);
        this.physics.add.overlap(player, apples, collectApple, null, this);

        /**manzana 9 */
        apples = this.physics.add.group({
            key: 'apple',
            setXY: { x: 670, y: 160, stepX: 90 }
        });

        /**Colisión manzana plataformas */
        this.physics.add.collider(apples, platforms);
        this.physics.add.overlap(apples, player);
        this.physics.add.overlap(player, apples, collectApple, null, this);

        //VERDURA//

        /**berenjena 1 */
        eggplants = this.physics.add.group({
            key: 'eggplant',
            setXY: { x: 170, y: 160, stepX: 90 }
        });

        /**Colisión berenjena plataformas */
        this.physics.add.collider(eggplants, platforms);
        this.physics.add.overlap(eggplants, player);
        this.physics.add.overlap(player, eggplants, hitEggplant, null, this);

        /**berenjena 2 */
        eggplants = this.physics.add.group({
            key: 'eggplant',
            setXY: { x: 470, y: 460, stepX: 90 }
        });

        /**Colisión berenjena plataformas */
        this.physics.add.collider(eggplants, platforms);
        this.physics.add.overlap(eggplants, player);
        this.physics.add.overlap(player, eggplants, hitEggplant, null, this);

        /**berenjena 3 */
        eggplants = this.physics.add.group({
            key: 'eggplant',
            setXY: { x: 770, y: 260, stepX: 90 }
        });


        
        /**Colisión berenjena plataformas */
        this.physics.add.collider(eggplants, platforms);
        this.physics.add.overlap(eggplants, player);
        this.physics.add.overlap(player, eggplants, hitEggplant, null, this);

        /**berenjena 4 */
        eggplants = this.physics.add.group({
            key: 'eggplant',
            setXY: { x: 370, y: 60, stepX: 90 }
        });

        /**Colisión berenjena plataformas */
        this.physics.add.collider(eggplants, platforms);
        this.physics.add.overlap(eggplants, player);
        this.physics.add.overlap(player, eggplants, hitEggplant, null, this);

        //ZAPATO//
        /**zapato 1 */
        shoes = this.physics.add.group({
            key: 'shoe',
            setXY: { x: 270, y: 260, stepX: 90 }
        });

        /**Colisión zapato plataformas */
        this.physics.add.collider(shoes, platforms);
        this.physics.add.overlap(shoes, player);
        this.physics.add.overlap(player, shoes, hitShoe, null, this);

        /**zapato 2 */
        shoes = this.physics.add.group({
            key: 'shoe',
            setXY: { x: 610, y: 360, stepX: 90 }
        });

        /**Colisión zapato plataformas */
        this.physics.add.collider(shoes, platforms);
        this.physics.add.overlap(shoes, player);
        this.physics.add.overlap(player, shoes, hitShoe, null, this);

        /**zapato 3 */
        shoes = this.physics.add.group({
            key: 'shoe',
            setXY: { x: 510, y: 160, stepX: 90 }
        });

        /**Colisión zapato plataformas */
        this.physics.add.collider(shoes, platforms);
        this.physics.add.overlap(shoes, player);
        this.physics.add.overlap(player, shoes, hitShoe, null, this);


        /**Puntuación */

        scoreText = this.add.text(16, 16, 'score: 0', { font:"30px Arial",fill:"#FFF"});

        /**texto para saber como hacer restart */
        this.add.text(20, 560, "Pulsa [R] para recargar ", {
            font: "24px Arial",
            fill: "white"
          });
    },

    update: function () {
        if (cursors.left.isDown) {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }

        
    }
    
});

function collectApple(player, apple) {
    
    apple.disableBody(true, true);
    score += 15;
    scoreText.setText('Score: ' + score);
    if (score == 135) {
        this.add.text(300, 250, '¡¡Ganaste!!', {font:'80px Arial', fill: 'white'});
        
      }
}

//*función para que cuando alcance objeto que no es fruta, se pare y acabe el juego**/
function hitEggplant (player, eggplant)
{
    eggplant.disableBody(true, true);
    this.physics.pause();

    player.setTint(0xff0000);
    this.cameras.main.fadeOut(2000, 270, 0, 0);
    scoreText.setText('score: ' + score);


    player.anims.play('turn');

    gameOver = true;

    if (gameOver = true) {
        this.add.text(320, 250, '¡¡Perdiste!!', {font:'80px Arial', fill: 'white'});
        
      }
    
}

//*función para que cuando alcance objeto que no es fruta, se pare y acabe el juego**/
function hitShoe (player, shoe)
{
    shoe.disableBody(true, true);
    this.physics.pause();

    player.setTint(0xff0000);
    this.cameras.main.fadeOut(2000, 270, 0, 0);
    scoreText.setText('score: ' + score);


    player.anims.play('turn');

    gameOver = true;

    if (gameOver = true) {
        this.add.text(320, 250, '¡¡Perdiste!!', {font:'80px Arial', fill: 'white'});
        
      }
    
}





